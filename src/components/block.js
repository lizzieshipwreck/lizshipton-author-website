import * as React from 'react'
import * as localStyles from './block.module.css';

const Block = ({ contentOne, contentTwo, flip, horizontal, styles }) => {

    if (flip) {
    return (
        <div className={horizontal ? styles.blockContainer : localStyles.horizontal}>
            <div>{contentTwo}</div>
            <div>{contentOne}</div>
        </div>
        )
    } else {
    return (
        <div className={horizontal ? styles.blockContainer : localStyles.horizontal}>
            <div>{contentOne}</div>
            <div>{contentTwo}</div>
        </div>

    )
    }

}

export default Block;