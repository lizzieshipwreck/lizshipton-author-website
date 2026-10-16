import * as React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'gatsby'
import Layout from '../components/page-layouts/layout'
import BookButton from "../components/book-button.js";
import {instructions, allClaimedInstructions} from "../copy/qr.js";

import * as styles from './qr.module.css';

const EditingPage = () => {

  const [code, setCode] = useState(null);
  const [message, setMessage] = useState("");

  const getCode = async () => {
    try {
        const response = await fetch('/api/redeem-slaughter-code', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
      });

      const data = await response.json();
      
      if (response.ok) {
        setCode(data.downloadCode);
      } else {
        if (response.status === 410) {
          setMessage(data.message)
        }
        console.error('All codes redeemed');
      }
    } catch(error) {
      console.error(error)
    }
  }

  const markCode = async () => {
      try {
        const response = await fetch('/api/mark-slaughter-code-redeemed', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({code})
      });

      const data = await response.json();
      
      if (response.ok) {
        return
      } else {
        console.error('Failed to redeem code:', data.error);
      }
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCode();
  }, [])

  return (
    <Layout pageTitle="Free QR Download">
      <div className={styles.container}>
        <div className={styles.bookCode}>
            <p className={styles.code}>
                {code || message}
            </p>
            <p className={styles.instructions}>
                {code ? instructions : allClaimedInstructions}
            </p>
            <Link to="https://lizshipton.com/privacy.html" id={'privacy policy'} target='blank'>
                privacy policy
            </Link>
            {
              code &&  <BookButton text={"proceed"} mobileText={"proceed"} title={"Brand"} link={`https://getmybook.com/${code}`} onClick={markCode}/>
            }
        </div>
      </div>
    </Layout>
  )
}

export default EditingPage 