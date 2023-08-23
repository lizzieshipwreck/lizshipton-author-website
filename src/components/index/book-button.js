import * as React from 'react';
import { Link } from "gatsby";
import * as styles from "./book-button.module.css";

const BookButton = ({ link, text, title, mobile }) => {
    return (
        <div className={`${mobile ? styles.mobileContainer : styles.container}`}>
            <Link to={link} target="_blank">
                <button className={`${styles[`button${title}`]}`}>{text}</button>
            </Link>
        </div>
    )
}

export default BookButton;