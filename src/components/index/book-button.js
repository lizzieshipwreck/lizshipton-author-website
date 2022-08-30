import * as React from 'react';
import { Link } from "gatsby";
import * as styles from "./book-button.module.css";

const BookButton = ({ link, text, title, flip }) => {
    return (
        <div className={`${flip ? styles.flipContainer : styles.container}`}>
            <Link to={link}>
                <button className={`${styles[`button${title}`]} ${flip && styles[`button${title}Flip`]}`}>{text}</button>
            </Link>
        </div>
    )
}

export default BookButton;