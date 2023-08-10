import * as React from 'react'

import Layout from '../components/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';

import { thalassic_na_alt, thalassic_na_image, thalassic_na_link, tropes } from '../copy/thalassic_na';
import { salt_na_link } from '../copy/salt';

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <AuthorIntroBlock />
          <div className={styles.seriesImage}>
            <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt} link={thalassic_na_link}/>
          </div>
          <div className={styles.tropes}>
            <SeriesImage src={tropes} alt={"Salt Book Tropes"} link={salt_na_link}/>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage