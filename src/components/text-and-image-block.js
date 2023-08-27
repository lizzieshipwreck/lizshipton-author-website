import * as React from 'react'

import BookButton from './book-button';
import BlockLayoutImage from './page-layouts/block-image';

import * as styles from './text-and-image-block.module.css';


const TextBlock = ({heading, paragraphs, cta}) => {

    return (
        <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>{heading}</h2>
                {
                    paragraphs.map((paragraph, i) => {
                        return (
                        <p className={styles.text} key={i}>
                            {paragraph}
                        </p>
                        )
                    })
                }
            { cta && <BookButton link={cta.link} text={cta.text} mobileText = {cta.mobileText} title={cta.colorScheme}/> }
        </div>
    )
}

const TextAndImageBlock = ({ content, textFirst, i }) => {

    const {heading, paragraphs, cta, image} = content;

    const shouldReveal = i > 0;

    const revealClass = shouldReveal ? textFirst ? styles.revealLeft : styles.revealRight : '';
    
    return (
            textFirst ? (
                <div className={`${styles.block} ${revealClass}`}>
                    <TextBlock heading={heading} paragraphs={paragraphs} cta={cta}/>
                    <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>

                 </div>
            )
            :
            (
                <div className={`${styles.block} ${revealClass}`}>
                    <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>
                    <TextBlock heading={heading} paragraphs={paragraphs} cta={cta}/>

                 </div>
            )
    )
}

export default TextAndImageBlock;