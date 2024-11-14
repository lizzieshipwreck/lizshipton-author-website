import * as React from 'react';
import {useState, useEffect} from 'react';

import * as styles from "./book-button.module.css";

const BookButton = ({ link, text, mobileText, title, noOpen }) => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        checkWindowWidth();
        return () => window.removeEventListener('resize', checkWindowWidth)
    });
  
    const checkWindowWidth = () => {
        if (typeof window !== undefined) {
        const width = window.innerWidth;
        setWindowWidth(width);
        window.addEventListener('resize', checkWindowWidth);
        }
    }
  
    const isMobile = windowWidth < 750;

    return (
        <div className={styles.container}>
            <a href={link} target={noOpen ? "" : "_blank"}>
                <button className={`${styles[`button${title}`]}`}>{isMobile ? mobileText : text}</button>
            </a>
        </div>
    )
}

export default BookButton;