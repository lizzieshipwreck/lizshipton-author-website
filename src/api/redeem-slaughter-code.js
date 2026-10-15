import { getStore } from '@netlify/blobs';

export default async function handler(req, res) {
  // Only allow POST requests so people can't accidentally trigger a download link 
  // just by pasting the API URL directly into a browser tab.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const store = getStore({name: 'slaughter_delivery_store', siteID: process.env['NETLIFY_PROJECT_ID'], token: process.env['NETLIFY_AUTH_TOKEN']});
    let bookCodeLedger = await store.get('book_code_ledger', { type: 'json' });
  
    // One-time initialization from your Netlify dashboard string
    if (Object.keys(bookCodeLedger).length === 0) {
      const codeString = process.env['GATSBY_SLAUGHTER_QR_CODES'];
      const rawCodes = codeString.split(",");
      bookCodeLedger = {};

      
      rawCodes.forEach(code => {
        if (code.trim()) bookCodeLedger[code.trim()] = false; 
      });

      await store.setJSON('book_code_ledger', bookCodeLedger);
    }

    // Find the first available unused link
    const availableCodes = Object.keys(bookCodeLedger);
    const firstAvailableCode = availableCodes.find(code => bookCodeLedger[code] === false);

    if (!firstAvailableCode) {
      return res.status(410).json({ message: "All codes have been claimed!" });
    }

    // Mark as used and commit to persistent storage
    // Netlify automatically creates the 'slaughter_delivery_store' bucket for this k/v store
    bookCodeLedger[firstAvailableCode] = true;
    await store.setJSON('book_code_ledger', bookCodeLedger);

    // Return the link
    return res.status(200).json({ downloadCode: firstAvailableCode });

  } catch (error) {
    console.error("Storage Error:", error);
    return res.status(500).json({ error: "Failed to process token." });
  }
}
