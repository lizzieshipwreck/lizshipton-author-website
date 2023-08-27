import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/page-layouts/layout'
import { Link } from 'gatsby'

import * as styles from "./newsletter.module.css"
import { seed_ya_download_link, seed_na_download_link } from '../copy/seed'

const NewsletterRedirect = () => {

    return (
      <Layout pageTitle="Newsletter">
            <div className={styles.content}>
              <h3 className={styles.textHeader}>Before we head to the newsletter...</h3>
              <h1 className={styles.text}>Do you like your books with spice, or no spice?</h1>
              <div className={styles.block}>
                <Link to={seed_na_download_link}>
                  <StaticImage src={"../images/spicy.png"} placeholder="blurred" quality={100} height={300} />
                </Link>
                <Link to={seed_ya_download_link}>
                  <StaticImage src={"../images/mild.png"} placeholder="blurred" quality={100} height={300} />
                </Link>
              </div>
          </div>
        </Layout>
  )
}

export default NewsletterRedirect 