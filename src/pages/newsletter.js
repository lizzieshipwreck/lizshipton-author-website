import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/page-layouts/layout'
import { Link } from 'gatsby'

import * as styles from "./newsletter.module.css"
import { header, subheader, seed_ya_download_link, seed_na_download_link } from '../copy/newsletter'

const secret_book_club_link = "https://signup.lizshipton.com/free-short-stories"

const NewsletterRedirect = () => {

    return (
      <Layout pageTitle="Newsletter">
            <div className={styles.content}>
              <h3 className={styles.textHeader}>{header}</h3>
              <h1 className={styles.text}>{subheader}</h1>
              <div className={styles.block}>
                <Link to={secret_book_club_link} className={styles.button}>
                  <StaticImage src={"../images/spicy.png"} placeholder="blurred" quality={100} height={300} />
                </Link>
                <Link to={seed_ya_download_link} className={styles.button}>
                  <StaticImage src={"../images/mild.png"} placeholder="blurred" quality={100} height={300} />
                </Link>
              </div>
          </div>
        </Layout>
  )
}

export default NewsletterRedirect 