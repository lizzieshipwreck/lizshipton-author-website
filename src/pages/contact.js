import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "./contact.module.css"

const AboutPage = () => {
  return (
    <Layout pageTitle="Contact">
      <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.text}>
              Shoot me an email anytime at <a href="mailto:liz@lizshipton.com" className={styles.link}>liz@lizshipton.com</a>. I love chatting with fellow readers, writers, and travelers. I'm also available for guest posts and consulting work.
            </p>
          </div>
      </div>
    </Layout>
  )
}

export default AboutPage 