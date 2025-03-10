import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { DOTSLASH_INDEX_PAGE } from '../copy/dotslash_magic'

const DotSlashMagic = () => {

    return (
        <LandingPageRedirect pageTitle={"Dot Slash Magic"} redirectUrl={DOTSLASH_INDEX_PAGE.link}/>
  )
}

export default DotSlashMagic; 