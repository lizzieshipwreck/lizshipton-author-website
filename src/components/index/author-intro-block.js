import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./author-intro-block.module.css";
import { Link } from 'gatsby';

const AuthorIntroBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to="/about" >
                    <StaticImage src={"../../images/Casual Headshot.png"} placeholder="blurred" quality={100} height={175} className={styles.headshot}/>
                </Link>
                <h2 className={styles.textHeader}>
                    come for the sex and magic
                </h2>
                <p className={styles.text}>
                    stay for the absolute choas
                </p>
                <p className={styles.finger}>
                    👇🏻
                </p>
            </div>
        </div>
    )
}

export default AuthorIntroBlock;

