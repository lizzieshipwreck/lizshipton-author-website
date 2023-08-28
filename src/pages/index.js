import * as React from 'react'

import Layout from '../components/page-layouts/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';

import { thalassic_na_alt, thalassic_na_image, thalassic_na_amazon_link, salt_tropes, salt_tropes_alt, savage_na_link, savage_promo, savage_promo_alt, savage_pre_order_text, savage_button_color, salt_na_link, thalassic_na_cta_mobile_text, thalassic_na_cta_text, thalassic_na_button_color } from '../copy/thalassic_na';
import BookButton from '../components/book-button';

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <AuthorIntroBlock />
          <div className={styles.headline}>
            <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt}/>
          </div>
          <div className={styles.button}>
            <BookButton text={thalassic_na_cta_text} mobileText={thalassic_na_cta_mobile_text} title={thalassic_na_button_color} link={thalassic_na_amazon_link}/>
          </div>
          <div className={styles.middle}>
            <SeriesImage src={savage_promo} alt={savage_promo_alt} link={savage_na_link}/>
          </div>
          <div className={styles.button}>
            <BookButton text={savage_pre_order_text} mobileText={savage_pre_order_text} title={savage_button_color} link={savage_na_link}/>
          </div>
          <div className={styles.end}>
            <SeriesImage src={salt_tropes} alt={salt_tropes_alt} link={salt_na_link}/>
          </div>
          <div className={styles.button}>
            <BookButton text={"Free in KU"} mobileText={savage_pre_order_text} title={"Salt"} link={savage_na_link}/>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage