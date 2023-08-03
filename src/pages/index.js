import * as React from 'react'
import { useState, useEffect } from 'react';

import Layout from '../components/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';

import { thalassic_na_alt, thalassic_na_image, thalassic_na_link, tropes } from '../copy/thalassic_na';

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
          <AuthorIntroBlock />
          <div className={styles.seriesImage}>
            <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt} link={thalassic_na_link}/>
          </div>
          <div className={styles.tropes}>
            <SeriesImage src={tropes} alt={"Salt Book Tropes"} link={thalassic_na_link}/>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage