import * as React from 'react'

import Layout from '../components/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';

import { thalassic_na_alt, thalassic_na_image, thalassic_na_amazon_link, salt_tropes, savage_na_link, savage_promo } from '../copy/thalassic_na';
import { salt_na_link } from '../copy/salt';
import BookButton from '../components/index/book-button';

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <AuthorIntroBlock />
          <div className={styles.headline}>
            <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt}/>
          </div>
          <div className={styles.button}>
            <BookButton text={"Shop Now"} title={"Soul"} link={thalassic_na_amazon_link}/>
          </div>
          <div className={styles.middle}>
            <SeriesImage src={savage_promo} alt={"Savage Character Tropes"} link={savage_na_link}/>
          </div>
          <div className={styles.end}>
            <SeriesImage src={salt_tropes} alt={"Salt Book Tropes"} link={salt_na_link}/>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage