import * as React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import * as styles from "./book-sales-page.module.css"
import Block from '../components/block';
import BookButton from '../components/index/book-button';
import BookCover from '../components/index/book-cover';
import { StaticImage } from 'gatsby-plugin-image';

const BookSalesPage = ({title, cta, mobile_cta, link, cover_image, cover_alt, quotes, description}) => {

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

  const isMobile = windowWidth < 850;

  const CTA =  isMobile ? mobile_cta : cta;

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
              />
          <div className={styles.textBlock}>
            <BookButton link={link} text={CTA} title={title} mobile={isMobile}/>
            <h2 className={styles.textHeader}>{tagline}</h2>
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