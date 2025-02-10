import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { shop_redirect_link } from '../copy/redirects';

const Shop = () => {

    return (
        <LandingPageRedirect pageTitle={"Shop"} redirectUrl={ shop_redirect_link }/>
  )
}

export default Shop 