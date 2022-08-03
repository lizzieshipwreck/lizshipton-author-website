import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={styles.content}>
        <div className={styles.block}>
          <StaticImage src={"../images/lizzie_hammock_smile_round.png"} placeholder="blurred" quality={100} width={500}/>
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>Part-time author 🪶 Full-time pirate</h2>
            <p className={styles.text}>
              Hi! I'm Liz. I have a stupid haircut and I write speculative fiction about young women who make questionable decisions.
              I like books where romance takes a back seat, or just stays home.
              I enjoy creative world-building, humor, and characters who are nearly irredeemable. 
            </p>
            <p className={styles.text}>
              I live on a sailboat with my boyfriend and my dog. We're on a mission to sail around
              the world! I strive to incorporate my sailing experiences into my writing while
              being sensitive to the people who occupy the places we travel to.
            </p>
            <p className={styles.text}>
              When I'm not writing about the impending apocalypse, I code or write about code.
              You can also sometimes find me doing yoga, walking with my dog, singing, or watching Taskmaster.
            </p>
            <h3 className={styles.textFooter}> ⚓ Thanks for stopping by!</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage 