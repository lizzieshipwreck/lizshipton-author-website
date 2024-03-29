import * as React from 'react'
import { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './layout.module.css'
import Header from '../header'
import Sidebar from '../sidebar'
import Footer from '../footer'

const Layout = ({ pageTitle, children }) => {

  // TODO: make this a provider
  let offsetStart = 0;
  let offsetEnd = 0;

  useEffect(() => {
    setScrollPosition();
    return () => window.removeEventListener('scroll', setScrollPosition)
});

const getScrollPosition = () => {
  return document.documentElement.style.setProperty('--scroll', ( window.scrollY - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}

const setScrollPosition = () => {
  // set a --scroll variable on the style object so we can access it in 
//  modules and bind animations to scroll
    if (typeof window !== undefined) {
      window.addEventListener('scroll', getScrollPosition);
    }
}


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
          <main className={styles.content}>
            <Sidebar socialLinks={socialLinks}/>
            {children}
          </main>
          <Footer/>
        </div>
  )
}

export default Layout