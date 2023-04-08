import * as React from 'react'
import LandingPageRedirect from '../components/landing-page-redirect'
import { seed_download_link } from '../copy/seed'

const NewsletterRedirect = () => {

    return (
        <LandingPageRedirect pageTitle={"Newsletter"} redirectUrl={seed_download_link}/>
  )
}

export default NewsletterRedirect 