import * as React from 'react'
import BookSalesPage from '../components/book-sales-page';
import { salt_description, salt_cta, salt_title, salt_cover_image, salt_alt, salt_kindle_link, salt_quotes, salt_mobile_cta } from '../copy/salt';

const Salt = () => {

  return (
    <BookSalesPage 
        title={salt_title} 
        cover_image={salt_cover_image} 
        cover_alt={salt_alt} 
        link={salt_kindle_link} 
        description={salt_description} 
        cta={salt_cta}
        mobile_cta={salt_mobile_cta}
        quotes={salt_quotes}
    />
  )
}

export default Salt 