import * as React from 'react';
import { Link } from "gatsby";
import * as styles from "./book-button.module.css";

const BookButton = ({link, text, title}) => {
    return (
        <Link to={link}>
            <button className={styles[`button${title}`]}>{text}</button>
        </Link>
    )
}

export default BookButton;