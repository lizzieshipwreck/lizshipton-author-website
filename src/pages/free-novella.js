import * as React from 'react'
import LandingPageRedirect from '../components/landing-page-redirect'
import { scourge_download_link } from '../copy/scourge'; 

const FreeNovellaRedirect = () => {

    return (
        <LandingPageRedirect pageTitle={"Free Novella"} redirectUrl={scourge_download_link}/>
  )
}

export default FreeNovellaRedirect 