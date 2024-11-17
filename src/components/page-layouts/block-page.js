import * as React from 'react'
import {useState, useEffect} from 'react';

import TextAndImageBlock from '../text-and-image-block';

const BlockLayoutPage = ({flip, content}) => {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
      checkWindowWidth();
      return () => window.removeEventListener('resize', checkWindowWidth)
  });

  const checkWindowWidth = () => {
      if (typeof window !== undefined) {
      const width = window.innerWidth;
      setWindowWidth(width);
      window.addEventListener('resize', checkWindowWidth);
      }
  }

  const isMobile = windowWidth < 750;

  return (
      <div>
        {
          content.map((contentItem, i) => {
            let textFirst = flip ? i % 2 === 0 : i % 2 !== 0;
            console.log(contentItem, i, textFirst)
            if (isMobile) {
              // always render the image first on mobile to avoid large chunks
              // of text immediately following one another
              textFirst = false;
            }

            return (
              <TextAndImageBlock content={contentItem} textFirst={textFirst} i={i}/>
            )
          })
        }
      </div>
  )
}

export default BlockLayoutPage 