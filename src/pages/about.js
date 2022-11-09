import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "./about.module.css"
import { about_one, about_two, about_three, about_four } from "../copy/about";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={styles.content}>
        <div className={styles.block}>
          <StaticImage src={"../images/lizzie_hammock_smile_round.png"} placeholder="blurred" quality={100} height={475}/>
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>Part-time author 🪶 Full-time pirate</h2>
            <p className={styles.text}>
              {about_one}
            </p>
            <p className={styles.text}>
              {about_two}
            </p>
            <p className={styles.text}>
              {about_three}
            </p>
            <p className={styles.text}>
              {about_four}
            </p>
            <h3 className={styles.textFooter}> ⚓ Thanks for stopping by!</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage 