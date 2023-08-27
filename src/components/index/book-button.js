import * as React from 'react';
import * as styles from "./book-button.module.css";

const BookButton = ({ link, text, title, mobile }) => {
    return (
        <div className={`${mobile ? styles.mobileContainer : styles.container}`}>
            <a href={link} target="_blank">
                <button className={`${styles[`button${title}`]}`}>{text}</button>
            </a>
        </div>
    )
}

export default BookButton;