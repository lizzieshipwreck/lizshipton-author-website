import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as blockStyles from './block.module.css'

const Block = ({ contentOne, contentTwo, flip, styles }) => {

    if (flip) {
    return (
        <div className={styles.container}>
            <div>{contentTwo}</div>
            <div>{contentOne}</div>
        </div>
        )
    } else {
    return (
        <div className={styles.container}>
            <div>{contentOne}</div>
            <div>{contentTwo}</div>
        </div>

    )
    }

}

export default Block;