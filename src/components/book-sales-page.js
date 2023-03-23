import * as React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import * as styles from "./book-sales-page.module.css"
import Block from '../components/block';
import BookButton from '../components/index/book-button';
import BookCover from '../components/index/book-cover';
import { StaticImage } from 'gatsby-plugin-image';

const BookSalesPage = ({title, cta, link, cover_image, cover_alt, quotes, description, flip}) => {

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

  const CTA = windowWidth > 850 ? cta : "FREE IN KU";

  const {tagline, paragraphs} = description;

  const shortDescription = paragraphs.length <= 4;

  return (
    <Layout pageTitle={title}>
      <div className={styles.content}>
        <div className={styles.blocks}>
        <Block
              contentOne={
                <BookCover title={title} src={cover_image} alt={cover_alt} link={link}/>
              }
              styles={styles}
              flip={flip}
              />
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>{tagline}</h2>
            <br/>
              <BookButton link={link} text={CTA} flip={flip} title={title} dark/>
            <br/>
              {
                  paragraphs.map((paragraph) => {
                      return <p className={styles.text}>{paragraph}</p>
                  })
              }
            <br/>
            {
              shortDescription && (
                quotes.map((quote) => {
                  return <p className={styles.quote}>{quote}</p>
                })
              )
            }
          </div>
        </div>
        {
          !shortDescription && <div className={styles.reviews}>
            <StaticImage src={"../images/five-stars.jpeg"} placeholder="blurred" quality={100} height={50}/>
            {
                (
                  quotes.map((quote) => {
                    return <p className={styles.quote}>{quote}</p>
                  })
                )
              }
          </div>
        }


      </div>
    </Layout>
  )
}

export default BookSalesPage 