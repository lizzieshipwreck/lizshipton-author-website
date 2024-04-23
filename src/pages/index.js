import * as React from 'react'
import { useEffect, useState, useRef } from 'react';
import Layout from '../components/page-layouts/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';

import { thalassic_na_alt, thalassic_na_image, thalassic_na_shop_link,thalassic_na_text, thalassic_na_button_color } from '../copy/thalassic_na';
// import { dotslash_alt, dotslash_link, dotslash_text, dotslash_button_color } from '../copy/dotslash_magic';
import {holiday_alt, holiday_link, holiday_image, holiday_button_color, holiday_text} from '../copy/holiday_remix';

// import dotSlashGif from '../images/dot slash website gif.gif'

import BookButton from '../components/book-button';

const IndexPage = () => {

  const midAnimatedElement = useRef();
  const endAnimatedElement = useRef();

  const [shouldAnimateMid, setShouldAnimateMid] = useState(false);
  const [shouldAnimateEnd, setShouldAnimateEnd] = useState(false);

  // TODO: make this a provider
  useEffect(() => {
    if (midAnimatedElement && midAnimatedElement.current || endAnimatedElement && endAnimatedElement.current) {
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
          <div className={styles.middle}>
            {/* <div className={`${styles.border}`}/> */}
              <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt} className={styles.image}/>
              <h2 className={`${styles.comingSoonText}`}>⚓ The Thalassic Series ⚓</h2>
              <p className={`${styles.titleText}`}>What do you do with a drunken sailor when the world is underwater?</p>
            <div className={styles.button}>
              <BookButton text={thalassic_na_text} mobileText={thalassic_na_text} title={thalassic_na_button_color} link={thalassic_na_shop_link}/>
            </div>
          </div>
          <div className={`${styles.middle}`}>
            <div className={`${styles.border}`}/>
            <h3 className={`${styles.comingSoonText}`}>💖 Holiday Remixes 💖</h3>
            <p className={`${styles.titleText}`}>Short.  Silly. Spicy. Speculative.</p>
            <SeriesImage src={holiday_image} alt={holiday_alt} className={styles.image}/>
          </div>
          <div className={styles.button}>
            <BookButton text={holiday_text} mobileText={holiday_text} title={holiday_button_color} link={holiday_link}/>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <meta property='og:image' content={'https://i.ibb.co/yP63QJv/na-thalassic-social-share.png'}></meta>
  )
}