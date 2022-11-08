import * as React from 'react'
import LandingPageRedirect from '../components/landing-page-redirect'
import { seed_download_link } from '../copy/seed'

const FreeShortStoryRedirect = () => {

    return (
        <LandingPageRedirect pageTitle={"Free Short Story"} redirectUrl={seed_download_link}/>
  )
}

export default FreeShortStoryRedirect 