import * as React from 'react'

import BookButton from './book-button';
import BlockLayoutImage from './page-layouts/block-image';
import SeriesImage from '../components/index/series-image';


import * as styles from './text-and-image-block.module.css';


const TextBlock = ({heading, subheading, paragraphs, ctas}) => {

    const italic = paragraphs?.italic;
    const withHeaders = paragraphs?.withHeaders;

    return (
        <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>{heading}</h2>
            <h3 className={styles.textSubheader}>{subheading}</h3>
                {
                    paragraphs?.text.map((paragraph, i) => {
                        return (
                        <p className={`${styles[italic ? `review` : `text`]} ${styles[(withHeaders && i % 2 === 0) && `sectionHeader`]}`} key={i}>
                            {paragraph}
                        </p>
                        )
                    })
                }
            <div className={styles.ctas}>
                { ctas && ctas?.map((cta, i) => {
                    return (
                        <BookButton link={cta.link} text={cta.text} mobileText={cta.mobileText} title={cta.colorScheme} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

const TextAndImageBlock = ({ content, textFirst, i }) => {

    const {heading, subheading, paragraphs, ctas, images, noMargin, center} = content;
    let noText;

    if(!paragraphs) {
        noText = true;
    }

    
    return (
        noText ? (

            <div className={`${center ? styles.center : styles.imageBlock} ${noMargin && styles.noMargin}`}>
                <div className={styles.imageRow}>
                    {images && images.length > 1 ? 
                        images.map((image, i) => {
                            return <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>
                        })
                    : 
                        <SeriesImage src={images[0].src} alt={images[0].alt} caption={images[0].caption} className={styles.center}/>
                    }       
                </div>
                { ctas && ctas?.map((cta, i) => {
                    return (
                        <div className={styles.center}>
                            <BookButton link={cta.link} text={cta.text} mobileText={cta.mobileText} title={cta.colorScheme} key={i}/>
                        </div>   
                    )
                })}
            </div>
        ) :
            textFirst ? (
                <div className={`${center ? styles.center : styles.block} ${noMargin && styles.noMargin}`}>
                    <TextBlock heading={heading} subheading={subheading} paragraphs={paragraphs} ctas={ctas}/>
                    {images && <BlockLayoutImage src={images[0].src} link={images[0].link} alt={images[0].alt}/>}

                 </div>
            )
            :
            (
                <div className={`${center ? styles.center : styles.block} ${noMargin && styles.noMargin}`}>
                    {images && <BlockLayoutImage src={images[0].src} link={images[0].link} alt={images[0].alt}/>}
                    <TextBlock heading={heading} subheading={subheading} paragraphs={paragraphs} ctas={ctas}/>
                 </div>
            )
    )
}

export default TextAndImageBlock;