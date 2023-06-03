import React from 'react'
import styles from './Header.module.scss';
import logo from '@/assets/LogoSVG.svg'
import ButtonCustom from '@/Components/ButtonCustom';

export default function HeaderCustom() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <div className={styles.camposDeTexto}>

      </div>
      <div className={styles.botoes}>
        {/* <ButtonCustom text='Sobre'/> */}
      </div>
    </header>
  )
}
