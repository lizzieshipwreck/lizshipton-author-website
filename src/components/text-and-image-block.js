import * as React from 'react'
import { useEffect, useState, useRef } from 'react';

import BookButton from './book-button';
import BlockLayoutImage from './page-layouts/block-image';

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

    const {heading, subheading, paragraphs, ctas, image, noMargin, center} = content;


    
    return (
            textFirst ? (
                <div className={`${center ? styles.center : styles.block} ${noMargin && styles.noMargin}`}>
                    <TextBlock heading={heading} subheading={subheading} paragraphs={paragraphs} ctas={ctas}/>
                    {image && <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>}

                 </div>
            )
            :
            (
                <div className={`${center ? styles.center : styles.block} ${noMargin && styles.noMargin}`}>
                    {image && <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>}
                    <TextBlock heading={heading} subheading={subheading} paragraphs={paragraphs} ctas={ctas}/>
                 </div>
            )
    )
}

export default TextAndImageBlock;