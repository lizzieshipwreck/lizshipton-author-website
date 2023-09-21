import * as React from 'react'
import { useEffect, useState, useRef } from 'react';
import Layout from '../components/page-layouts/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';

import { thalassic_na_alt, thalassic_na_image, thalassic_na_shop_link, salt_tropes, salt_tropes_alt, savage_na_link, savage_promo, savage_promo_alt, savage_button_text, savage_mobile_text, savage_button_color, salt_na_link, salt_button_text, salt_mobile_text, salt_button_color, thalassic_na_cta_mobile_text, thalassic_na_cta_text, thalassic_na_button_color } from '../copy/thalassic_na';
import BookButton from '../components/book-button';

const IndexPage = () => {

  const midAnimatedElement = useRef();
  const endAnimatedElement = useRef();

  const [shouldAnimateMid, setShouldAnimateMid] = useState(false);
  const [shouldAnimateEnd, setShouldAnimateEnd] = useState(false);

  // TODO: make this a provider
  useEffect(() => {
    if (midAnimatedElement && midAnimatedElement.current && endAnimatedElement && endAnimatedElement.current) {
      checkScrollPosition();
    }
    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, []);

  const checkScrollPosition = () => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
          const bottomOfViewport = Math.floor(window.scrollY + window.innerHeight);
          const topOfMidElement = Math.floor(midAnimatedElement?.current?.offsetTop);
          const topOfEndElement = Math.floor(endAnimatedElement?.current?.offsetTop);
          if (topOfMidElement <= bottomOfViewport) {
            setShouldAnimateMid(true);
          }
          if (topOfEndElement <= bottomOfViewport) {
            setShouldAnimateEnd(true);
          }
      });
    }
  }


  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <AuthorIntroBlock />
          <div className={styles.headline}>
            <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt}/>
          </div>
          <div className={styles.button}>
            <BookButton text={thalassic_na_cta_text} mobileText={thalassic_na_cta_mobile_text} title={thalassic_na_button_color} link={thalassic_na_shop_link}/>
          </div>
          <div ref={midAnimatedElement} className={`${styles.middle} ${shouldAnimateMid && styles.inView}`}>
            <SeriesImage src={savage_promo} alt={savage_promo_alt}/>
          </div>
          <div className={styles.button}>
            <BookButton text={savage_button_text} mobileText={savage_mobile_text} title={savage_button_color} link={savage_na_link}/>
          </div>
          <div ref={endAnimatedElement} className={`${styles.end} ${shouldAnimateEnd && styles.inView}`}>
            <SeriesImage src={salt_tropes} alt={salt_tropes_alt}/>
          </div>
          <div className={styles.button}>
            <BookButton text={salt_button_text} mobileText={salt_mobile_text} title={salt_button_color} link={salt_na_link}/>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage