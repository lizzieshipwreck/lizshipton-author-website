import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "./salt.module.css"
import { salt_description, salt_cta, salt_title, salt_cover_image, salt_alt, salt_kindle_link } from '../copy/salt';
import BookButton from '../components/index/book-button';
import BookCover from '../components/index/book-cover';

const [one, two, three, four] = salt_description

const SaltAmazonRedirect = () => {
  return (
    <Layout pageTitle="Salt">
      <div className={styles.content}>
        <div className={styles.block}>
            <div>
            <BookCover title={salt_title} cta={salt_cta} src={salt_cover_image} alt={salt_alt} />
            <BookButton link={salt_kindle_link} text="Click to Buy on Amazon" flip={false} title={salt_title} dark/> 
            </div>
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>What do you do with a drunken sailor when the world is under water?</h2>
            <br/>
            <p className={styles.text}>
              Seventeen-year-old trainwreck Bird Howsley is struggling to stay afloat.
            </p>
            <p className={styles.text}>
            A terrible sailor with a drinking habit to boot, Bird is not exactly thriving in a dystopian water world where most of humanity was wiped out by a pandemic. And now on top of everything, a message from her dead brother has her questioning everything she knew about her past.
            </p>
            <p className={styles.bold}>
            <b>Bird needs answers.</b>
            </p>
            <p className={styles.text}>
            But when her search for those answers takes a reckless turn, she puts herself and her best friend Sargo in the crosshairs of a dangerous underground organization that wants them dead.
            </p>
            <p className={styles.text}>
            Forced to flee their hometown, they sail into the Salt—and quickly discover that the organization they're running from runs deeper than they know...
            </p>
            <br/>
            <p className={styles.quote}>
            "An immersive read right from the get-go. The characters and world pull you in and won’t let you go. Definitely worth it!" - Amazon Review
            </p>
            <p className={styles.quote}>
            "Such a good book and a lovely surprise! Sailing, pirates, and urban dystopias. The action rarely stopped, and I had trouble putting it down! I highly recommend this book if you're looking for something fast-paced and dystopian." - Amazon Review
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SaltAmazonRedirect 