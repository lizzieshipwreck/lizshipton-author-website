import * as React from 'react';
import * as styles from './series-block.module.css'
import SeriesImage from './series-image';
import BookButton from '../book-button';

const SeriesBlock = ({image, alt, headlineOne, cta, mobileCta, button, link, hasBorder, isGif}) => {
    return (
        <div className={styles.container}>
            {
                hasBorder && <div className={`${styles.border}`}/>
            }
            {
                isGif ? <img src={image} alt={alt} className={styles.gif}/> : <SeriesImage src={image} alt={alt} className={styles.image}/>
            }
            <p className={`${styles.headlineText}`}>{headlineOne}</p>
        <div className={styles.button}>
            <BookButton text={cta} mobileText={mobileCta} title={button} link={link}/>
        </div>
    </div>
    )
}

export default SeriesBlock;