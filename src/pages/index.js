import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.css'

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
      <div className={styles.content}>
        <a href="https://subscribepage.io/scourge-giveaway">
          <h1 className={styles.titleText}><b>Scourge</b> novella available now</h1>
          <StaticImage
            src="../images/scourge_mockup.jpg"
            width={1000}
            placeholder="blurred"
            quality={100}
          />
          <h2 className={styles.text}>Click to download for FREE!</h2>
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage