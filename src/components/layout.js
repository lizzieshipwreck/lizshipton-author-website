import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './layout.module.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          socialLinks {
            url
            color
            defaultSVG { icon mask color }
          }
        }
      }
    }
  `)

  const { site: { siteMetadata: { title, socialLinks } } } = data;

  return (
    <div className={styles.container}>
      <Header siteName={title} pageName={pageTitle}/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer socialLinks={socialLinks}/>
    </div>
  )
}

export default Layout
