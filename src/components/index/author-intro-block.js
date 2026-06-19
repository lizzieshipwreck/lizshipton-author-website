import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./author-intro-block.module.css";
import { Link } from 'gatsby';

const AuthorIntroBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to="/about" >
                    <StaticImage src={"../../images/Books.png"} placeholder="blurred" quality={100} height={350} className={styles.books} />
                </Link>
                <h2 className={styles.textHeader}>
                    speculative fiction with teeth
                </h2>
                <p className={styles.text}>
                    come for the magic. stay for the mayhem
                </p>
                <p className={styles.finger}>
                    👇🏻
                </p>
            </div>
        </div>
    )
}

export default AuthorIntroBlock;

