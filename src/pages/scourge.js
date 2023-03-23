import * as React from 'react'
import BookSalesPage from '../components/book-sales-page';
import { scourge_description, scourge_cta, scourge_title, scourge_cover_image, scourge_alt, scourge_kindle_link, scourge_quotes, scourge_mobile_cta } from '../copy/scourge';

const Scourge = () => {

  return (
    <BookSalesPage 
        title={scourge_title} 
        cover_image={scourge_cover_image} 
        cover_alt={scourge_alt} 
        link={scourge_kindle_link} 
        description={scourge_description} 
        cta={scourge_cta}
        mobile_cta={scourge_mobile_cta}
        quotes={scourge_quotes}
    />
  )
}

export default Scourge 