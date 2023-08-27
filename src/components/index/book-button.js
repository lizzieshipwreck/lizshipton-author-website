import * as React from 'react';
import * as styles from "./book-button.module.css";

const BookButton = ({ link, text, title }) => {
    return (
        <div className={styles.container}>
            <a href={link} target="_blank">
                <button className={`${styles[`button${title}`]}`}>{text}</button>
            </a>
        </div>
    )
}

export default BookButton;