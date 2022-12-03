import * as React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import BookCover from '../components/index/book-cover';
import * as styles from './index.module.css'
import BookButton from '../components/index/book-button';
import Block from '../components/block';

import { scourge_description, scourge_cta, scourge_title, scourge_cover_image, scourge_alt } from '../copy/scourge';
import { salt_description, salt_cta, salt_title, salt_cover_image, salt_alt } from '../copy/salt';
import { seed_cover_image, seed_cta, seed_description, seed_title, seed_alt } from '../copy/seed';


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
          <div className={styles.blocks}>
            <Block
              contentOne={
                <BookCover
                  src={scourge_cover_image}
                  description={scourge_description}
                  link={"/novella"}
                  title={scourge_title}
                  alt={scourge_alt}
                />
              }
            contentTwo={
              <BookButton
                link="/novella"
                text={scourge_cta}
                title={scourge_title}
                flip={flip}
              />
            }
            styles={styles}
            flip={flip}
            />
            <Block
              contentOne={
                <BookCover
                  src={seed_cover_image}
                  description={seed_description}
                  link={"/free-short-story"}
                  title={seed_title}
                  alt={seed_alt}
                />
              }
            contentTwo={
              <BookButton
                link="/free-short-story"
                text={seed_cta}
                title={seed_title}
                flip={flip}
              />
            }
            styles={styles}
            flip={flip}
            />
            <Block
              contentOne={
                <BookCover
                  src={salt_cover_image}
                  description={salt_description}
                  link={"/newsletter"}
                  title={salt_title}
                  alt={salt_alt}
                />
              }
            contentTwo={
              <BookButton
                link="/newsletter"
                text={salt_cta}
                title={salt_title}
                flip={flip}
              />
            }
              styles={styles}
              flip={flip}
            />
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage