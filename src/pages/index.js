import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import * as styles from './index.module.css'
import AuthorIntroBlock from '../components/index/author-intro-block';
import SeriesBlock from '../components/index/series-block';

import { DOTSLASH_INDEX_PAGE } from '../copy/dotslash_magic';
import { THALASSIC_INDEX_PAGE } from '../copy/thalassic';
import { MISCHIEF_INDEX_PAGE } from '../copy/mischief';
import { NEWSLETTER_INDEX_PAGE } from '../copy/newsletter';

import dotslash_image from "../images/Dot Slash Header Graphic.gif";

DOTSLASH_INDEX_PAGE.image = dotslash_image;

const INDEX_CONTENT = [DOTSLASH_INDEX_PAGE, THALASSIC_INDEX_PAGE, MISCHIEF_INDEX_PAGE, NEWSLETTER_INDEX_PAGE]

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <AuthorIntroBlock />
          {
            INDEX_CONTENT.map((item, i) => {
              return (
                <div className={`${styles[i === 0 ? `fadeIn` : 'noFade']}`}>
                  <SeriesBlock
                    key={i}
                    image={item.image}
                    alt={item.alt}
                    title={item.title}
                    headlineOne={item.headlineOne}
                    headlineTwo={item.headlineTwo}
                    cta={item.cta}
                    mobileCta={item.mobileCta}
                    button={item.button}
                    link={item.link}
                    hasBorder={i !== 0}
                    isGif={item.isGif}
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