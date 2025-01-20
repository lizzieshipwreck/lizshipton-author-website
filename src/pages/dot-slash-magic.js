import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_link } from '../copy/dotslash_magic'

const DotSlashMagic = () => {

    return (
        <LandingPageRedirect pageTitle={"Dot Slash Magic"} redirectUrl={dotslash_link}/>
  )
}

export default DotSlashMagic; 