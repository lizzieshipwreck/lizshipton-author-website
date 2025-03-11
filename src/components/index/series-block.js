import * as React from 'react';
import * as styles from './series-block.module.css'
import SeriesImage from './series-image';
import BookButton from '../book-button';

const SeriesBlock = ({image, alt, title, headlineOne, headlineTwo, cta, mobileCta, button, link, hasBorder, isGif}) => {
    return (
        <div className={styles.container}>
            {
                hasBorder && <div className={`${styles.border}`}/>
            }
            {
                isGif ? <img src={image} alt={alt} className={styles.gif}/> : <SeriesImage src={image} alt={alt} className={styles.image}/>
            }
            <h2 className={`${styles.titleText}`}>{title}</h2>
            <p className={`${styles.headlineText}`}>{headlineOne}</p>
            <p className={`${styles.headlineText}`}>{headlineTwo}</p>
        <div className={styles.button}>
            <BookButton text={cta} mobileText={mobileCta} title={button} link={link}/>
        </div>
    </div>
    )
}

export default SeriesBlock;