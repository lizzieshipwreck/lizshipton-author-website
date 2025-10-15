import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./author-intro-block.module.css";
import { Link } from 'gatsby';

const AuthorIntroBlock = () => {
    return (
        <div>
            <Link to="/about" className={styles.authorIntro}>
                <StaticImage src={"../../images/monkey headshot round.png"} placeholder="blurred" quality={100} height={175} className={styles.authorHeadshot}/>
             </Link>
            <h2 className={styles.textHeader}>Brilliantly stupid</h2>
            <p className={styles.text}>
                because "good writer" means nothing now.
            </p>
        </div>
    )
}

export default AuthorIntroBlock;

