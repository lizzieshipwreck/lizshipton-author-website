import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "./book-sales-page.module.css"
import BookButton from '../components/index/book-button';
import BookCover from '../components/index/book-cover';

const BookSalesPage = ({title, cta, link, cover_image, cover_alt, quotes, description}) => {

    const {tagline, paragraphs} = description;
  return (
    <Layout pageTitle={title}>
      <div className={styles.content}>
        <div className={styles.block}>
            <div>
            <BookCover title={title} src={cover_image} alt={cover_alt} />
            <BookButton link={link} text={cta} flip={false} title={title} dark/> 
            </div>
          <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>{tagline}</h2>
            <br/>
                {
                    paragraphs.map((paragraph) => {
                        return <p className={styles.text}>{paragraph}</p>
                    })
                }
            <br/>
                {
                    quotes.map((quote) => {
                        return <p className={styles.quote}>{quote}</p>
                    })
                }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookSalesPage 