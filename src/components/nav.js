import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav.module.css'
import Hamburger from 'hamburger-react'

const Nav = ({ isHamburgerOpen, setIsHamburgerOpen, windowWidth }) => {

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  return (
    <nav className={styles.navMenu}>
      { isHamburgerOpen && 
        (
        <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText} id={styles.home}>
              <b>Home</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText} id={styles.about}>
              <b>About</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/newsletter" className={styles.navLinkText} id={styles.newsletter}>
              <b>{!!windowWidth && windowWidth > 850 ? 'Newsletter' : 'News'}</b>
            </Link>
            </li>
            {/* <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText}>
              <b>Blog</b>
            </Link>
            </li> */}
          </ul>
        )
      }
      <Hamburger
        color='black'
        distance='lg'
        toggled={isHamburgerOpen}
        toggle={toggleHamburger}
      />
    </nav>
  )
}

export default Nav
