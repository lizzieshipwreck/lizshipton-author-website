import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import * as styles from './ya-books.module.css'

import { thalassic_ya_alt, thalassic_ya_image, thalassic_ya_paperback_link, thalassic_ya_ebook_link, about_one, about_two, about_three, about_four } from '../copy/thalassic_ya';
import BookButton from '../components/index/book-button';

const YABooks = () => {

  return (
    <Layout pageTitle={"YA Books"}>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>Young Adult (YA) Editions</h2>
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
            <h3 className={styles.block}>
              <BookButton link={thalassic_ya_ebook_link} text={"eBooks"} title={"Salt"}/>
              <BookButton link={thalassic_ya_paperback_link} text={"Paperbacks"} title={"Sand"}/>
            </h3>
          </div>
          <div className={styles.imageBlock}>
            <StaticImage src={"../images/three_covers_ya.png"} alt={thalassic_ya_alt} placeholder="blurred" quality={100}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default YABooks