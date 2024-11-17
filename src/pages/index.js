import * as React from 'react'
import { useEffect, useState, useRef } from 'react';
import Layout from '../components/page-layouts/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesImage from '../components/index/series-image';
import BookButton from '../components/book-button';

import { dotslash_alt, dotslash_link, dotslash_text, dotslash_button_color, dotslash_title, dotslash_headline_one, dotslash_headline_two } from '../copy/dotslash_magic';
import { thalassic_headline, thalassic_na_alt, thalassic_na_image, thalassic_link, thalassic_na_text, thalassic_na_button_color_one, thalassic_title } from '../copy/thalassic';
import { mischief_alt, mischief_link, mischief_image, mischief_button_color, mischief_text, mischief_title, mischief_headline } from '../copy/mischief';
import {about_liz_link, about_liz_cta_text, about_liz_cta_mobile_text, about_liz_button_color} from '../copy/about';
import { newsletter_title, newsletter_headline } from '../copy/newsletter';

import dotslash_image from "../images/Dot Slash Header Graphic.gif";

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
              <img src={dotslash_image} alt={dotslash_alt} className={styles.gif}/>
              <h2 className={`${styles.titleText}`}>{dotslash_title}</h2>
              <p className={`${styles.headlineText}`}>{dotslash_headline_one}</p>
              <p className={`${styles.headlineText}`}>{dotslash_headline_two}</p>
            <div className={styles.button}>
              <BookButton text={dotslash_text} mobileText={dotslash_text} title={dotslash_button_color} link={dotslash_link}/>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={`${styles.border}`}/>
              <SeriesImage src={thalassic_na_image} alt={thalassic_na_alt} className={styles.image}/>
              <h2 className={`${styles.titleText}`}>{thalassic_title}</h2>
              <p className={`${styles.headlineText}`}>{thalassic_headline}</p>
            <div className={styles.button}>
              <BookButton text={thalassic_na_text} mobileText={thalassic_na_text} title={thalassic_na_button_color_one} link={thalassic_link} noOpen/>
            </div>
          </div>
          <div className={`${styles.middle}`}>
            <div className={`${styles.border}`}/>
            <h3 className={`${styles.titleText}`}>{mischief_title}</h3>
            <p className={`${styles.headlineText}`}>{mischief_headline}</p>
            <SeriesImage src={mischief_image} alt={mischief_alt} className={styles.image}/>
          </div>
          <div className={styles.button}>
            <BookButton text={mischief_text} mobileText={mischief_text} title={mischief_button_color} link={mischief_link} noOpen/>
          </div>
          <div className={`${styles.middle}`}>
            <div className={`${styles.border}`}/>
            <h3 className={`${styles.titleText}`}>{newsletter_title}</h3>
            <p className={`${styles.headlineText}`}>{newsletter_headline}</p>
          </div>
          <div className={styles.button}>
            <BookButton text={about_liz_cta_text} mobileText={about_liz_cta_mobile_text} title={about_liz_button_color} link={about_liz_link} noOpen/>
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