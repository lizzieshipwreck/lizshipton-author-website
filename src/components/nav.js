import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav.module.css'
import Hamburger from 'hamburger-react'

const Nav = ({ isHamburgerOpen, setIsHamburgerOpen }) => {

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  return (
    <nav className={styles.navMenu}>
      { isHamburgerOpen && 
        (
        <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              <b>Home</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              <b>About</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/newsletter" className={styles.navLinkText}>
              <b>Newsletter</b>
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
        color='#a9a9a9'
        distance='lg'
        toggled={isHamburgerOpen}
        toggle={toggleHamburger}
      />
    </nav>
  )
}

export default Nav
