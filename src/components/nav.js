import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav.module.css'

const Nav = () => {

  return (
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
          <Link to="/about" className={styles.navLinkText}>
            <b>About</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText}>
              <b>Blog</b>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav
