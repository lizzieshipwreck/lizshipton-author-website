import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.css'

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
      <div className={styles.content}>
        <Link to="https://subscribepage.io/scourge-giveaway">
          <h1 className={styles.text}><i>Scourge</i> novella available now</h1>
          <StaticImage
            src="../images/salt_mockup.jpg"
            width={1000}
            placeholder="blurred"
            quality={100}
          />
          <h2 className={styles.text}>Click to download for FREE!</h2>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage