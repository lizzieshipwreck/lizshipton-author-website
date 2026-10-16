
import { getStore } from '@netlify/blobs';

export default async function handler(req, res) {
  // Only allow POST requests so people can't accidentally trigger a download link 
  // just by pasting the API URL directly into a browser tab.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = await req.json();

  const usedCode = data.code;

  try {
    const store = getStore({name: 'slaughter_delivery_store', siteID: process.env.SITE_ID, token: process.env.GATSBY_TOKEN});
    let bookCodeLedger = await store.get('book_code_ledger', { type: 'json' }) || {};


    // Find the first available unused link
    const availableCodes = Object.keys(bookCodeLedger);
    const thisUsedCode = availableCodes.find(code => code === usedCode);

    if (!thisUsedCode) {
      return res.status(410).json({ message: "Code not found in ledger!" });
    }

    // Mark as used and commit to persistent storage
    // Netlify automatically creates the 'slaughter_delivery_store' bucket for this k/v store
    const date = new Date();
    bookCodeLedger[thisUsedCode] = date.toLocaleString('en-US');
    await store.setJSON('book_code_ledger', bookCodeLedger);

    // Return the link
    return res.status(200).json({ updatedCode: true });

  } catch (error) {
    console.error("Storage Error:", error);
    return res.status(500).json({ error: "Failed to mark code as used." });
  }
}

