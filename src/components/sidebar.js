import * as React from 'react'
import Social from './social';
import * as styles from './sidebar.module.css'

const Sidebar = ({socialLinks}) => {
    return (
        <footer className={styles.container}>
            <Social socialLinks={socialLinks}/>
        </footer>

    )
}

export default Sidebar;