import * as React from 'react'
import { useState, useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import * as styles from './ya-books.module.css'

import { thalassic_ya_alt, thalassic_ya_shop_link, about_one, about_two, about_three } from '../copy/thalassic_ya';
import BookButton from '../components/index/book-button';

const YABooks = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
      checkWindowWidth();
      return () => window.removeEventListener('resize', checkWindowWidth)
  });

  const checkWindowWidth = () => {
      if (typeof window !== undefined) {
      const width = window.innerWidth;
      setWindowWidth(width);
      window.addEventListener('resize', checkWindowWidth);
      }
  }

const isMobile = !!windowWidth && windowWidth < 700;

  return (
    <Layout pageTitle={"YA Books"}>
      <div className={styles.content}>
        <div className={styles.block}>
          {isMobile && <StaticImage src={"../images/ya_complete_mock.png"} alt={thalassic_ya_alt} placeholder="blurred" quality={100} style={{marginBottom: '3rem'}}/>}
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
            <br/>
              <BookButton link={thalassic_ya_shop_link} text={"Buy YA Editions"} title={"Sand"} mobile={isMobile}/>
          </div>
          <div className={styles.imageBlock}>
            {!isMobile && <StaticImage src={"../images/ya_complete_mock.png"} alt={thalassic_ya_alt} placeholder="blurred" quality={100}/>}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default YABooks