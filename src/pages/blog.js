import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { blog_redirect_link } from '../copy/redirects';

const Blog = () => {

    return (
        <LandingPageRedirect pageTitle={"Blog"} redirectUrl={ blog_redirect_link }/>
  )
}

export default Blog 