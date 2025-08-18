import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { book_club_redirect_link} from '../copy/redirects';

const Newsletter = () => {

    return (
        <LandingPageRedirect pageTitle={"Newsletter"} redirectUrl={ book_club_redirect_link }/>
  )
}

export default Newsletter; 