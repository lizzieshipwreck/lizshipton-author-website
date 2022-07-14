import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {


  return (
    <Layout pageTitle="Coming Soon!">
        <StaticImage
        alt="A headshot of a woman with a low-key mowhawk"
        src="../images/author_headshot_round.png"/>
    </Layout>
  )
}

export default IndexPage