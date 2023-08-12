import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import QueryString from 'qs'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import PropogateLoader from "react-spinners/PropagateLoader";
import * as styles from './landing-page-redirect.module.css';

const EMAIL_PARAMS = ['remain', 'releases', 'arc', 'spice', 'no_spice', 'subscription', 'prequel']

const ThankyouText = ({isEmailClick, isPurchaseClick}) => {
    if (isEmailClick) {
        return (
            <h2 className={styles.subtitle}>Your choice has been recorded</h2>
        )   
    } else if (isPurchaseClick) {
        return (
            <div>
                <h2 className={styles.subtitle}>Visit <a href="https://purchase.bookfunnel.com/lizshiptonbooks" className={styles.link}>https://purchase.bookfunnel.com/lizshiptonbooks</a> to download your eBook(s)</h2>
                <h3 className={styles.subtitle}>You will also receive an email from help@bookfunnel.com with a link to download them later</h3>
                <h4 className={styles.subtitle}>If you purchased physical items, check your email for confirmation from PayHip</h4>
            </div>
        )
    }
    else {
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
    const [isPurchaseClick, setIsPurchaseClick] = useState(false);

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
            } else if (params['ebook-purchase']) {
                // we have been sent here from PayHip after an eBook purchase.
                // Show the 'thank you for your purchase' text
                setIsPurchaseClick(true); 
            }
            else {
                // we have been sent here from a landing page thank you,
                // or from an email where the user has responded to a prompt by clicking a link.
                // Show the 'your choice has been recorded' text
                for (let param in EMAIL_PARAMS) {
                    const option = EMAIL_PARAMS[param]
                    if (params[option]) {
                        setIsEmailClick(true)
                        return;
                    }
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
                        <ThankyouText isEmailClick={isEmailClick} isPurchaseClick={isPurchaseClick} />
                    </div>
            </Layout>
            ) : (<div className={styles.spinner}> <PropogateLoader color={'black'} size={25}/></div>)
  )
}

export default LandingPageRedirect 