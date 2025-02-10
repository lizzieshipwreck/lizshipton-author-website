import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_sountrack } from '../copy/redirects';

const DotSlashSoundtrack = () => {

    return (
        <LandingPageRedirect pageTitle={"./soundtrack"} redirectUrl={ dotslash_sountrack }/>
  )
}

export default DotSlashSoundtrack; 