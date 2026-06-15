import * as React from 'react'
import {useState, useEffect} from 'react';

import Layout from '../components/page-layouts/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesBlock from '../components/index/series-block';

import { DOTSLASH_INDEX_PAGE } from '../copy/dotslash_magic';
import { THALASSIC_INDEX_PAGE } from '../copy/thalassic';
import { MOTHER_INDEX_PAGE } from '../copy/mother-slaughter';
import { ABOUT_INDEX_PAGE } from '../copy/about';

const INDEX_CONTENT = [MOTHER_INDEX_PAGE, DOTSLASH_INDEX_PAGE, THALASSIC_INDEX_PAGE]

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
  
    const isMobile = windowWidth < 750;

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <AuthorIntroBlock />
          {
            INDEX_CONTENT.map((item, i) => {
              return (
                <div className={`${styles[i === 0 && `hero`]}`}>
                  <SeriesBlock
                    key={i}
                    image={isMobile ? item.mobileImage : item.image}
                    alt={item.alt}
                    headlineOne={item.headlineOne}
                    cta={item.cta}
                    mobileCta={item.mobileCta}
                    button={item.button}
                    link={item.link}
                    hasBorder={i !== 0}
                  />
                </div>
              )
            })
          }
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