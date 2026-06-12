import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./author-intro-block.module.css";
import { Link } from 'gatsby';

const AuthorIntroBlock = () => {
    return (
        <div>
            <Link to="/about" className={styles.authorIntro}>
                <StaticImage src={"../../images/Casual Headshot.jpg"} placeholder="blurred" quality={100} height={175} className={styles.authorHeadshot}/>
             </Link>
            <h2 className={styles.textHeader}>
                sci-fi & fantasy for unserious people
            </h2>
            <p className={styles.text}>
                I write about the looming collapse of society. But, like...in a fun way.
            </p>
        </div>
    )
}

export default AuthorIntroBlock;

