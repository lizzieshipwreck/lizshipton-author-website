import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./author-intro-block.module.css";

const AuthorIntroBlock = () => {
    return (
        <div className={styles.authorIntro}>
            <StaticImage src={"../images/author_headshot_round.png"} placeholder="blurred" quality={100} height={175} className={styles.authorHeadshot} />
            <h2 className={styles.textHeader}>Part-time author 🪶⚓ Full-time pirate</h2>
            <p className={styles.text}>
                Sailing around the world. Turning my adventures into Sci-Fi and Fantasy books.
            </p>
        </div>
    )
}

export default AuthorIntroBlock;

