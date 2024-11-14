import * as React from 'react'
import { useEffect, useState, useRef } from 'react';

import BookButton from './book-button';
import BlockLayoutImage from './page-layouts/block-image';

import * as styles from './text-and-image-block.module.css';


const TextBlock = ({heading, paragraphs, ctas}) => {

    const italic = paragraphs.italic;

    return (
        <div className={styles.textBlock}>
            <h2 className={styles.textHeader}>{heading}</h2>
                {
                    paragraphs.text.map((paragraph, i) => {
                        return (
                        <p className={`${styles[italic ? `italic` : `text`]}`} key={i}>
                            {paragraph}
                        </p>
                        )
                    })
                }
            <div className={styles.ctas}>
                { ctas && ctas.map((cta, i) => {
                    return (
                        <BookButton link={cta.link} text={cta.text} mobileText={cta.mobileText} title={cta.colorScheme} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

const TextAndImageBlock = ({ content, textFirst, i }) => {

    const {heading, paragraphs, ctas, image, noMargin} = content;

    const animatedElement = useRef();
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // TODO: make this a provider
    useEffect(() => {
      if (animatedElement.current) {
        checkScrollPosition();
      }
      return () => window.removeEventListener('scroll', checkScrollPosition)
    }, [animatedElement]);
  
    const checkScrollPosition = () => {
      if (typeof window !== undefined) {
        window.addEventListener('scroll', () => {
            const shouldReveal = i > 0;
            const bottomOfViewport = Math.floor(window.scrollY + window.innerHeight);
            const topOfAnimatedElement = Math.floor(animatedElement?.current?.offsetTop);
            if (shouldReveal && (topOfAnimatedElement <= bottomOfViewport)) {
              setShouldAnimate(true);
            }
        });
      }
    }
    
    return (
            textFirst ? (
                <div className={`${styles.block} ${shouldAnimate && styles.inView} ${noMargin && styles.noMargin}`} ref={animatedElement}>
                    <TextBlock heading={heading} paragraphs={paragraphs} ctas={ctas}/>
                    <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>

                 </div>
            )
            :
            (
                <div className={`${styles.block} ${shouldAnimate && styles.inView} ${noMargin && styles.noMargin}`} ref={animatedElement}>
                    <BlockLayoutImage src={image.src} link={image.link} alt={image.alt}/>
                    <TextBlock heading={heading} paragraphs={paragraphs} ctas={ctas}/>
                 </div>
            )
    )
}

export default TextAndImageBlock;