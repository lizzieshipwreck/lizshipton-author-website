import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_asmrtists } from '../copy/redirects';

const DotSlashASMRtists = () => {

    return (
        <LandingPageRedirect pageTitle={"./ASMRtists"} redirectUrl={ dotslash_asmrtists }/>
  )
}

export default DotSlashASMRtists; 