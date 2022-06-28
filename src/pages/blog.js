import * as React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
          <ul>
      <ul>
      {
        data.allFile.nodes.map(({name}) => (
          <li key={name}>
            {name}
          </li>
        ))
      }
      </ul>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage