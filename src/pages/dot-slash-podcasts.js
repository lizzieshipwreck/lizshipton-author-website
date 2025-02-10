import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_podcasts } from '../copy/redirects';

const DotSlashPodcasts = () => {

    return (
        <LandingPageRedirect pageTitle={"./podcasts"} redirectUrl={ dotslash_podcasts }/>
  )
}

export default DotSlashPodcasts; 