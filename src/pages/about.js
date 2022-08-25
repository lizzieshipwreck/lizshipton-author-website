import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={styles.content}>
        <div className={styles.block}>
          <StaticImage src={"../images/lizzie_hammock_smile_round.png"} placeholder="blurred" quality={100} height={475}/>
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>Part-time author 🪶 Full-time pirate</h2>
            <p className={styles.text}>
              Hi! I'm Liz. I have a stupid haircut and I write speculative fiction about
              young women who make questionable decisions. I live on a sailboat with my boyfriend and my dog.
              We're on a mission to sail around the world, and I'm turning my real-life adventures into YA Sci-Fi books!
            </p>
            <p className={styles.text}>
              My debut series <i>The Thalassic Tetralogy</i> is about two friends who are forced to undertake an arduous sailing voyage in a 
              near-future dystopia destroyed by climate chagne and pandemics. Along the way, they fight pirates, run from a shadow government, overcome mental health issues and addiction,
              find their places in the world and (yes) fall in love.
            </p>
            <p className={styles.text}>
              I write about sailing because it helps me process my own sailing experiences. I love incorporating the incredible, beautiful, fascinating places and people we encounter into my work.
              I write about characters who struggle with addiction and mental health because these are things I have struggled with.
              I write about the immigrant experience because I grew up as an immigrant.
              I write about climate change, pandemics, and the apocalypse because...honestly? It's more fun to read about those things in a book 
              than to watch them happening all around you.
              I write about pirates because...well, pirates. Duh.
            </p>
            <p className={styles.text}>
              When I'm not writing about the impending apocalypse, I code or write about code.
              You can also sometimes find me doing yoga, walking my dog, singing, or watching Taskmaster.
            </p>
            <h3 className={styles.textFooter}> ⚓ Thanks for stopping by!</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage 