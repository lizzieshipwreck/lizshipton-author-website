import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import * as styles from './newsletter.module.css'

const Newsletter = () => {

    return (
        <div className={styles.container}>
            <iframe src="https://lizshiptonauthor.substack.com/embed" className={styles.iFrame} frameborder={0} scrolling={'no'}></iframe>
            
        </div>
  )
}

export default Newsletter; 