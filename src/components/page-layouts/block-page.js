import * as React from 'react'
import TextAndImageBlock from '../text-and-image-block';
import * as styles from "./block-page.module.css"

const BlockLayoutPage = ({flip, content}) => {
  return (
      <div className={styles.content}>
        {
          content.map((contentItem, i) => {
            const textFirst = flip ? i % 2 === 0 : i % 2 !== 0;
            return (
              <TextAndImageBlock content={contentItem} textFirst={textFirst} i={i}/>
            )
          })
        }
      </div>
  )
}

export default BlockLayoutPage 