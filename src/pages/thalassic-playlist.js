import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import { thalassic_playlist } from '../copy/redirects';

const ThalassicPlaylist = () => {

    return (
        <LandingPageRedirect pageTitle={"Thalassic Playlist"} redirectUrl={ thalassic_playlist }/>
  )
}

export default ThalassicPlaylist; 