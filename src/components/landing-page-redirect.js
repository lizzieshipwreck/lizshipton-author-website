import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import QueryString from 'qs'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import PropogateLoader from "react-spinners/PropagateLoader";
import * as styles from './landing-page-redirect.module.css';

const ThankyouText = ({isEmailClick}) => {
    if (isEmailClick) {
        return (
            <h2 className={styles.subtitle}>Your choice has been recorded</h2>
        )   
    } else {
        return (
            <>
                <h2 className={styles.subtitle}>Check your inbox for a <b>confirmation email</b>.</h2>
                <h3 className={styles.header}>Don't forget to check your <i className={styles.spam}>SPAM</i> and <i className={styles.promo}>PROMOTIONS</i> folders!</h3>
            </>
    
        )
    }
}

const LandingPageRedirect = ({ pageTitle, redirectUrl }) => {
    
    const [params, setParams] = useState({});
    const [isEmailClick, setIsEmailClick] = useState(false);

    useEffect(() => {
        const redirectToLandingPage = () => {
            if (typeof window !== undefined) {
                window.location.replace(redirectUrl)
            }
        }
        if (typeof window !== undefined) {
            const params = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });
            setParams(params)
            if (!params['thank_you'] && redirectUrl) {
                // we have been sent here from a link that should redirect to a mailing list signup
                redirectToLandingPage();
            } else {
                // we have been sent here from a landing page thank you,
                // of from n email where the user has opted to receive new releases only.
                // Display the page.
                if (params['remain'] || params['releases'] || params['arc']) {
                    setIsEmailClick(true)
                }
            }
        }   
        return () => {}
    },[redirectUrl]);

    return (
            params['thank_you'] ? (
                <Layout pageTitle={pageTitle}>
                    <div className={styles.content}>
                        <StaticImage src={"../images/lizzie_and_aloy_round.png"} placeholder="blurred" quality={100} width={300}/>
                        <h1 className={styles.title}>Thank you!</h1>
                        <ThankyouText isEmailClick={isEmailClick} />
                    </div>
            </Layout>
            ) : (<div className={styles.spinner}> <PropogateLoader color={'black'} size={25}/></div>)
  )
}

export default LandingPageRedirect 