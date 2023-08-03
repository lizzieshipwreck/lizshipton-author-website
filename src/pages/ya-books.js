import * as React from 'react'
import { useState, useEffect } from 'react';

import Layout from '../components/layout'
import BookCover from '../components/index/book-cover';
import * as styles from './index.module.css'
import SeriesImage from '../components/index/series-image';

import { thalassic_ya_alt, thalassic_ya_image, thalassic_ya_link } from '../copy/thalassic_ya';
import { bad_magic_alt, bad_magic_image, bad_magic_link } from '../copy/bad_magic';

const IndexPage = () => {

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
  
  const flip = !!windowWidth && windowWidth < 700;

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
        <div className={styles.seriesHeader}>
            <h1 >Thalassic Series (YA Edition)</h1>
          </div>
            <div className={styles.seriesImage}>
              <SeriesImage src={thalassic_ya_image} alt={thalassic_ya_alt} link={thalassic_ya_link}/>
          </div>
          <div className={styles.seriesHeader}>
            <h1 >Bad Magic (Serialized Contemporary YA Fantasy)</h1>
          </div>
          <div className={styles.seriesImage}>
            <BookCover
                src={bad_magic_image}
                description={""}
                link={bad_magic_link}
                title={""}
                alt={bad_magic_alt}
            />          
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage