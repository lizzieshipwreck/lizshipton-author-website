import * as React from 'react'
import Nav from './nav';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({siteName, pageName}) => {
    return (
        <div className={styles.container}>
            <title>{siteName} | {pageName}</title>
            <Link to="/">
                <StaticImage alt="Liz Shipton logo with compass" src="../images/logo.png" width={250}/>
            </Link>
            <Nav/>
        </div>

    )
}

export default Header;