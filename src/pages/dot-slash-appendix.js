import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_appendix } from '../copy/redirects';

const DotSlashAppendix = () => {

    return (
        <LandingPageRedirect pageTitle={"./appendix"} redirectUrl={ dotslash_appendix }/>
  )
}

export default DotSlashAppendix; 