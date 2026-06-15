import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./author-intro-block.module.css";
import { Link } from 'gatsby';

const AuthorIntroBlock = () => {
    return (
        <div>
            <Link to="/about" className={styles.authorIntro}>
                <StaticImage src={"../../images/Casual Headshot.png"} placeholder="blurred" quality={100} height={175} className={styles.authorHeadshot}/>
             </Link>
            <h2 className={styles.textHeader}>
                i write about the looming collapse of society
            </h2>
            <p className={styles.text}>
                but, like...in a fun way
            </p>
            <p className={styles.finger}>
                👇🏻
            </p>
        </div>
    )
}

export default AuthorIntroBlock;

