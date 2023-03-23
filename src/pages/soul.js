import * as React from 'react'
import BookSalesPage from '../components/book-sales-page';
import { soul_description, soul_cta, soul_title, soul_cover_image, soul_alt, soul_kindle_link, soul_quotes, soul_mobile_cta } from '../copy/soul';

const Soul = () => {

  return (
    <BookSalesPage 
        title={soul_title} 
        cover_image={soul_cover_image} 
        cover_alt={soul_alt} 
        link={soul_kindle_link} 
        description={soul_description} 
        cta={soul_cta}
        mobile_cta={soul_mobile_cta}
        quotes={soul_quotes}
    />
  )
}

export default Soul 