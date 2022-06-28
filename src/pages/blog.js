import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
          <ul>
      <ul>
      {
        data.allMdx.nodes.map(({id, frontmatter, body}) => (
          <article key={id}>
            <h2>{frontmatter.title}</h2>
            <p>Posted: {frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
            </article>
        ))
      }
      </ul>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage