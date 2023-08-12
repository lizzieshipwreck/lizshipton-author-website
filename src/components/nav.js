import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav.module.css'
import Hamburger from 'hamburger-react'

const lizshipton_shop_link = "https://shop.lizshipton.com";

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
            <Link to={lizshipton_shop_link} className={styles.navLinkText} id={'shop'}>
              <b>Shop</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/newsletter" className={styles.navLinkText} id={'newsletter'}>
              <b>{!!windowWidth && windowWidth > 850 ? 'Newsletter' : 'News'}</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/ya-books" className={styles.navLinkText} id={'YA'}>
              <b>{!!windowWidth && windowWidth > 850 ? 'YA Books' : 'YA'}</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText} id={'about'}>
              <b>About</b>
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
      {!!windowWidth && windowWidth < 500 &&
        <Hamburger
          color='gray'
          distance='lg'
          toggled={isHamburgerOpen}
          toggle={toggleHamburger}
        />
      }
    </nav>
  )
}

export default Nav
