import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { dotslash_sneak_peek} from '../copy/redirects';

const Newsletter = () => {

    return (
        <LandingPageRedirect pageTitle={"Newsletter"} redirectUrl={ dotslash_sneak_peek }/>
  )
}

export default Newsletter; 