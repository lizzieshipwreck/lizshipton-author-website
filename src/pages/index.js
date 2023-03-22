import * as React from 'react'
import { useState, useEffect } from 'react';

import Layout from '../components/layout'
import BookCover from '../components/index/book-cover';
import * as styles from './index.module.css'
import Block from '../components/block';
import AuthorIntroBlock from '../components/index/author-intro-block';

import { scourge_description, scourge_title, scourge_cover_image, scourge_alt, scourge_page_link } from '../copy/scourge';
import { salt_cover_image, salt_alt, salt_page_link } from '../copy/salt';
import { seed_cover_image, seed_description, seed_title, seed_alt, seed_page_link } from '../copy/seed';
import { sand_alt, sand_cover_image, sand_description, sand_page_link, sand_title } from '../copy/sand';
import { soul_alt, soul_cover_image, soul_description, soul_page_link, soul_title } from '../copy/soul';


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
          <div className={styles.blocks}>
          <Block
              contentOne={
                <BookCover
                  src={salt_cover_image}
                  link={salt_page_link}
                  alt={salt_alt}
                />
              }
              styles={styles}
              flip={flip}
              />
            <Block
              contentOne={
                <BookCover
                src={sand_cover_image}
                description={sand_description}
                link={sand_page_link}
                title={sand_title}
                alt={sand_alt}
                />
              }
              styles={styles}
              flip={flip}
              />
            <Block
              contentOne={
                <BookCover
                src={soul_cover_image}
                description={soul_description}
                link={soul_page_link}
                title={soul_title}
                alt={soul_alt}
                />
              }
              styles={styles}
              flip={flip}
              />
          </div>
          <div className={styles.blocks}>
            <Block
              contentOne={
                <BookCover
                src={scourge_cover_image}
                description={scourge_description}
                link={scourge_page_link}
                title={scourge_title}
                alt={scourge_alt}
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
              styles={styles}
              flip={flip}
              />
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage