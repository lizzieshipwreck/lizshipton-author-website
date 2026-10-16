import * as React from 'react';
import {useState, useEffect} from 'react';
import {navigate} from 'gatsby';

import * as styles from "./book-button.module.css";

const BookButton = ({ link, text, mobileText, title, isSeriesBlock, onClick}) => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [loading, setLoading] = useState(false);

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

    const handleOnClick = async (event) => {
        if (onClick) {
            setLoading(true);
            await onClick(event);
            setLoading(false);
        }
        if (link) {
            navigate(link);
        }
    }

    return (
        <div className={`${styles[isSeriesBlock ? 'seriesContainer' : 'container']}`}>
            <button onClick={handleOnClick} className={`${styles[`button${title}`]}`}>
                {loading ? '...' : (isMobile ? mobileText : text)}
            </button>
        </div>
    )
}

export default BookButton;