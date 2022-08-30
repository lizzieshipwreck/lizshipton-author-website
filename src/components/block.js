import * as React from 'react'

const Block = ({ contentOne, contentTwo, flip, styles }) => {

    if (flip) {
    return (
        <div className={styles.blockContainer}>
            <div>{contentTwo}</div>
            <div>{contentOne}</div>
        </div>
        )
    } else {
    return (
        <div className={styles.blockContainer}>
            <div>{contentOne}</div>
            <div>{contentTwo}</div>
        </div>

    )
    }

}

export default Block;