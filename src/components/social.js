import * as React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faFacebook, faGoodreads, faThreads, faDiscord } from '@fortawesome/free-brands-svg-icons';

import * as styles from './social.module.css'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const icons = {
    discord: faDiscord,
    tiktok: faTiktok,
    instagram: faInstagram,
    facebook: faFacebook,
    goodreads: faGoodreads,
    threads: faThreads,
    ream: faLayerGroup
  }


const Social = ({ socialLinks }) => {

    const [beat, setBeat] = useState("");

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
  
    const isMobile = windowWidth < 850;

  return (
      <div className={styles.container}>
          {
              socialLinks.map(({name, url}) => {
                  return (
                    <a href={url} className={styles.link}>
                        <FontAwesomeIcon
                            key={name} 
                            icon={icons[name]}
                            size={isMobile? "lg" : "2x"} 
                            fixedWidth 
                            beatFade={beat === name}
                            onMouseEnter={() => setBeat(name)} 
                            onMouseLeave={() => setBeat("")}
                        />
                    </a>
                  )
              })
          }
      </div>
  )
}

export default Social
