import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.css'

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.stack}>
              <StaticImage src={"../images/scourge_cover_small.jpg"} placeholder="blurred" quality={100} height={600} />
              <Link to="/free-novella">
                <button className={styles.buttonScourge}>GET YOUR FREE COPY</button>
              </Link>
            </div>
            <div className={styles.stack}>
              <StaticImage src={"../images/salt_cover_small.jpg"} placeholder="blurred" quality={100} height={600} />
              <Link to="/newsletter">
                <button className={styles.buttonSalt}>GET RELEASE UPDATES</button>
              </Link>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage