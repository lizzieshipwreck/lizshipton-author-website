import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import QueryString from 'qs'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import PropogateLoader from "react-spinners/PropagateLoader";
import * as styles from './landing-page-redirect.module.css'

const LandingPageRedirect = ({ pageTitle, redirectUrl }) => {
    
    const [params, setParams] = useState({});

    useEffect(() => {
        if (typeof window !== undefined) {
            const params = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });
            setParams(params)
            if (!params['thank_you']) {
                redirectToLandingPage();
            }
        }   
        return () => {}
    },[redirectToLandingPage]);

    const redirectToLandingPage = () => {
        if (typeof window !== undefined) {
            window.location.replace(redirectUrl)
        }
    }

    return (
            params['thank_you'] ? (
                <Layout pageTitle={pageTitle}>
                    <div className={styles.content}>
                        <StaticImage src={"../images/lizzie_and_aloy_round.png"} placeholder="blurred" quality={100} />
                        <h1 className={styles.title}>Thank you!</h1>
                        <h2 className={styles.subtitle}>Check your inbox for a confirmation email.</h2>
                        <h3 className={styles.header}>Don't forget to check your spam folder!</h3>
                    </div>
            </Layout>
            ) : (<div className={styles.spinner}> <PropogateLoader color={'black'} size={25}/></div>)
  )
}

export default LandingPageRedirect 