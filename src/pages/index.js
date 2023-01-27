import * as React from 'react'
import { useState, useEffect } from 'react';

import Layout from '../components/layout'
import BookCover from '../components/index/book-cover';
import * as styles from './index.module.css'
import BookButton from '../components/index/book-button';
import Block from '../components/block';

import { scourge_description, scourge_cta, scourge_title, scourge_cover_image, scourge_alt, scourge_kindle_link } from '../copy/scourge';
import { salt_description, salt_cta, salt_title, salt_cover_image, salt_alt, salt_kindle_link } from '../copy/salt';
import { seed_cover_image, seed_cta, seed_description, seed_title, seed_alt } from '../copy/seed';
import AuthorIntroBlock from '../components/index/author-intro-block';
import { sand_alt, sand_cover_image, sand_cta, sand_description, sand_kindle_link, sand_title } from '../copy/sand';
import { soul_alt, soul_cover_image, soul_cta, soul_description, soul_kindle_link, soul_title } from '../copy/soul';


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
                description={salt_description}
                link={salt_kindle_link}
                title={salt_title}
                alt={salt_alt}
                />
              }
              contentTwo={
                <BookButton
                link={salt_kindle_link}
                text={salt_cta}
                title={salt_title}
                flip={flip}
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
                link={sand_kindle_link}
                title={sand_title}
                alt={sand_alt}
                />
              }
              contentTwo={
                <BookButton
                link={sand_kindle_link}
                text={sand_cta}
                title={sand_title}
                flip={flip}
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
                link={soul_kindle_link}
                title={soul_title}
                alt={soul_alt}
                />
              }
              contentTwo={
                <BookButton
                link={soul_kindle_link}
                text={soul_cta}
                title={soul_title}
                flip={flip}
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
                link={scourge_kindle_link}
                title={scourge_title}
                alt={scourge_alt}
                />
              }
              contentTwo={
                <BookButton
                link={scourge_kindle_link}
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
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage