import React from 'react'
import styles from './FooterCustom.module.scss'

import logo from '@/assets/IconLight.png'
import facebook from '@/assets/IconFacebookLight.png'
import instagram from '@/assets/IconInstagramLight.png'

export default function FooterCustom() {
  return (
    <footer className={styles.footer} >
        <img src={logo} className={styles.logo}/>
    </footer>
  )
}
