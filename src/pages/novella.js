import * as React from 'react'
import LandingPageRedirect from '../components/landing-page-redirect'
import { scourge_download_link } from '../copy/scourge'; 

const NovellaRedirect = () => {

    return (
        <LandingPageRedirect pageTitle={"Scourge Novella"} redirectUrl={scourge_download_link}/>
  )
}

export default NovellaRedirect 