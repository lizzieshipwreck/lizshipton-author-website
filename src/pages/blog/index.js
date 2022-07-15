import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Blog">
      <div className={styles.content}>
        <h1 className={styles.text}>Coming soon</h1>
        <StaticImage
          src="../../images/goat_skull.jpg"
          width={750}
          placeholder="blurred"
          quality={100}
        />
      </div>
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
        slug
      }
    }
  }
`

export default BlogPage


// TODO

      {/* {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      } */}