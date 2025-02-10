import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_videos } from '../copy/redirects';

const DotSlashVideos = () => {

    return (
        <LandingPageRedirect pageTitle={"./videos"} redirectUrl={ dotslash_videos }/>
  )
}

export default DotSlashVideos; 