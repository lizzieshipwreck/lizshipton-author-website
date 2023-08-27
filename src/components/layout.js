import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './layout.module.css'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          socialLinks {
            url
            name
          }
        }
      }
    }
  `)

  const { site: { siteMetadata: { title, socialLinks } } } = data;

  return (
    <div className={styles.container}>
      <Header siteName={title} pageName={pageTitle}/>
        <Sidebar socialLinks={socialLinks}/>
        <main className={styles.main}>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout