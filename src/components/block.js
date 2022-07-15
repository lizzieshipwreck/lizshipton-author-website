import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './block.module.css'

const Block = ({ image, text, rtl }) => {
    const pic = getImage(image)

    if (rtl) {
        return (
        <div className={styles.container}>
                <GatsbyImage image={pic} width={100}/>
                <h3>{text}</h3>
        </div>
        )
    } else {
    return (
        <div className={styles.container}>
                <h3>{text}</h3>
                <GatsbyImage image={pic} width={100}/>
        </div>

    )
    }

}

export default Block;