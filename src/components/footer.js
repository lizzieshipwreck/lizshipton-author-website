import * as React from 'react'
import Social from './social';
import * as styles from './footer.module.css'

const Footer = ({socialLinks}) => {
    return (
        <footer className={styles.container}>
            <Social socialLinks={socialLinks}/>
        </footer>

    )
}

export default Footer;