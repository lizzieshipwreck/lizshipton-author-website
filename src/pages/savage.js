import * as React from 'react'
import BookSalesPage from '../components/book-sales-page';
import { savage_description, savage_cta, savage_title, savage_cover_image, savage_alt, savage_signup_link, savage_quotes, savage_mobile_cta } from '../copy/savage';

const Savage = () => {

  return (
    <BookSalesPage 
        title={savage_title} 
        cover_image={savage_cover_image} 
        cover_alt={savage_alt} 
        link={savage_signup_link} 
        description={savage_description} 
        cta={savage_cta}
        mobile_cta={savage_mobile_cta}
        quotes={savage_quotes}
    />
  )
}

export default Savage 