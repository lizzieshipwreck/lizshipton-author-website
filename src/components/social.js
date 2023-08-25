import * as React from 'react'
import { SocialIcon } from 'react-social-icons'
import * as styles from './social.module.css'

const Social = ({ socialLinks }) => {

  return (
      <div className={styles.container}>
          {
              socialLinks.map((link) => {
                  return <SocialIcon key={link.url} url={link.url} defaultSVG={link.defaultSVG} fgColor={"white"} bgColor={link.color || link.defaultSVG?.color } target="_blank" className={styles.link}/>
              })
          }
      </div>
  )
}

export default Social
