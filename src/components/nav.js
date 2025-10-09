import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav.module.css'
import Hamburger from 'hamburger-react'
import Dropdown from './dropdown'

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
            <li>
            <b><Dropdown windowWidth={windowWidth}/></b>
            </li>
            <li className={styles.navLinkItem}>
            <Link to={"/shop"} className={styles.navLinkText} id={'shop'}>
            <b>{!!windowWidth && windowWidth > 750 ? 'Shop' : 'Shop'}</b>
            </Link>
            </li>
            {!!windowWidth && windowWidth > 750 ? (<li className={styles.navLinkItem}>
              <Link to="/newsletter" className={styles.navLinkText} id={'newsletter'}>
              <b>Newsletter</b>
              </Link>
              </li>) 
            : ""}
            <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText} id={'about'}>
              <b>About</b>
            </Link>
            </li>
            <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText} id={'blog'}>
              <b>Blog</b>
            </Link>
            </li>
          </ul>
        )
      }
      {!!windowWidth && windowWidth < 750 &&
        <Hamburger
          color='#373636d9'
          distance='lg'
          toggled={isHamburgerOpen}
          toggle={toggleHamburger}
        />
      }
    </nav>
  )
}

export default Nav
