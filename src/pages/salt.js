import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { salt_redirect_link } from '../copy/redirects';

const Salt = () => {

    return (
        <LandingPageRedirect pageTitle={"Salt"} redirectUrl={ salt_redirect_link }/>
  )
}

export default Salt 