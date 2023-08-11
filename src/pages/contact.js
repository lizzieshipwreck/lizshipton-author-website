import * as React from 'react'

import Layout from '../components/layout'
import * as styles from "./contact.module.css"

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.text}>
              Shoot me an email anytime at <a href="mailto:liz@lizshipton.com" className={styles.link}>liz@lizshipton.com</a>.
            </p>
            <p className={styles.text}>
              I love chatting with fellow readers, writers, and travelers. I'm also available for guest posts and consulting work.
            </p>
            <p className={styles.text}>
              Questions about your data? Review my <a href="https://pdfhost.io/v/f6oaercs2_Liz_Shipton_Online_Privacy_Policy" target="_blank" rel="noreferrer">Privacy Policy</a>
            </p>
          </div>
      </div>
    </Layout>
  )
}

export default ContactPage 