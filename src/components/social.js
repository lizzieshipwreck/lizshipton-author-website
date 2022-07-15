import * as React from 'react'
import { SocialIcon } from 'react-social-icons'
import * as styles from './social.module.css'

const Social = ({ socialLinks }) => {

  return (
      <div className={styles.container}>
          {
              socialLinks.map((link) => {
                  return <SocialIcon url={link} bgColor={"black"} fgColor={"white"} target="_blank"/>
              })
          }
      </div>
  )
}

export default Social
