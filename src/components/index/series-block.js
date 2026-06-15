import * as React from 'react';
import * as styles from './series-block.module.css'
import SeriesImage from './series-image';
import BookButton from '../book-button';

const SeriesBlock = ({image, alt, headlineOne, cta, mobileCta, button, link}) => {

    return (
        <div>
            <SeriesImage src={image} alt={alt}/>
            <div className={styles.button}>
                <BookButton text={cta} mobileText={mobileCta} title={button} link={link} isSeriesBlock={true}/>
            </div>
        </div>
    )
}

export default SeriesBlock;