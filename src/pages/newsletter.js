import * as React from 'react'
import Layout from '../components/page-layouts/layout'
import BlockLayoutImage from '../components/page-layouts/block-image'
import * as styles from './newsletter.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { substack_link } from '../copy/about'

import {content} from '../copy/newsletter';


const Newsletter = () => {

    return (
        <Layout pageTitle="Newsletter">
            <div className={styles.container}>
                <div className={styles.bookCover}>
                    <StaticImage 
                        alt="Mother & Slaughter book cover"
                        src="../images/Mother Sneak Peek Cover.png"
                        placeholder="blurred"
                        quality={100}
                        width={400}
                    />
                </div>
                <div className={styles.signup}>
                    <h3 className={styles.header}>{content.newsletter_header}</h3>
                    <p className={styles.text}>{content.newsletter_text_one}</p>
                    <p className={styles.text}>{content.newsletter_text_two}</p>
                    <iframe src="https://lizshiptonauthor.substack.com/embed?transparent=1" frameborder={0} scrolling="no"></iframe>
                    <a href={substack_link} target='blank'  rel='noopener noreferrer'>
                        <StaticImage 
                            alt="Substack QR code"
                            src="../images/qr-code.png"
                            placeholder="blurred"
                            quality={100}
                            width={200}
                        />
                    </a>
                </div>
            </div>
        </Layout>
  )
}

export default Newsletter; 