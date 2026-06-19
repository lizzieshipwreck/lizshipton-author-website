import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutImage from '../components/page-layouts/block-image'
import * as styles from './newsletter.module.css'
import { StaticImage } from 'gatsby-plugin-image'

import {reaves_content} from '../copy/newsletter';


const HaileyReavesNewsletter = () => {

    return (
            <div className={styles.reavesContainer}>
                <div className={styles.bookCover}>
                    <StaticImage 
                        alt="Bonus chapter"
                        src="../images/bonus website.png"
                        placeholder="blurred"
                        quality={100}
                        width={400}
                    />
                </div>
                <div className={styles.signup}>
                        <StaticImage 
                            alt="Hailey Reaves logo"
                            src="../images/reaves website.png"
                            placeholder="blurred"
                            quality={100}
                            width={100}
                        />
                    <h3 className={styles.header}>{reaves_content.reaves_newsletter_header}</h3>
                    <p className={styles.text}>{reaves_content.reaves_newsletter_text_one}</p>
                    <p className={styles.text}>{reaves_content.reaves_newsletter_text_two}</p>
                    <p className={styles.center}>{reaves_content.reaves_newsletter_text_three}</p>
                    <iframe src="https://haileyreaves.substack.com/embed?transparent=1" frameborder={0} scrolling="no"></iframe>
                </div>
            </div>
  )
}

export default HaileyReavesNewsletter; 