import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { book_club_redirect_link } from '../copy/redirects';

const SecretBookClub = () => {

    return (
        <LandingPageRedirect pageTitle={"Secret Book Club"} redirectUrl={ book_club_redirect_link }/>
  )
}

export default SecretBookClub 