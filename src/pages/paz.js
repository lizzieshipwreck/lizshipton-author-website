import * as React from 'react'
import BookSalesPage from '../components/book-sales-page';
import { paz_description, paz_cta, paz_title, paz_cover_image, paz_alt, paz_signup_link, paz_quotes, paz_mobile_cta } from '../copy/paz';

const Paz = () => {

  return (
    <BookSalesPage 
        title={paz_title} 
        cover_image={paz_cover_image} 
        cover_alt={paz_alt} 
        link={paz_signup_link} 
        description={paz_description} 
        cta={paz_cta}
        mobile_cta={paz_mobile_cta}
        quotes={paz_quotes}
    />
  )
}

export default Paz 