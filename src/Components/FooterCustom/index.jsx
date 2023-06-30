import React from 'react'
import styles from './FooterCustom.module.scss'

import logo from '@/assets/IconLight.png'
import facebook from '@/assets/IconFacebookLight.png'
import instagram from '@/assets/IconInstagramLight.png'

export default function FooterCustom() {
  return (
    <footer className={styles.footer} >
      <div className={styles.Divlogo} >
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.icons}>
        <img src={facebook} className={styles.icon} />
        <img src={instagram} className={styles.icon} />
      </div>
    </footer>
  )
}
