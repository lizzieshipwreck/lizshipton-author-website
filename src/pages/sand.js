import * as React from 'react'
import BookSalesPage from '../components/book-sales-page';
import { sand_description, sand_cta, sand_title, sand_cover_image, sand_alt, sand_kindle_link, sand_quotes } from '../copy/sand';

const Sand = () => {

  return (
    <BookSalesPage 
        title={sand_title} 
        cover_image={sand_cover_image} 
        cover_alt={sand_alt} 
        link={sand_kindle_link} 
        description={sand_description} 
        cta={sand_cta}
        quotes={sand_quotes}
    />
  )
}

export default Sand 