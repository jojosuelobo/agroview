import React from 'react'
import styles from './Header.module.scss';
import logo from '@/assets/LogoSVG.svg'
import ButtomRouded from '@/Components/ButtonRoundCustom';


export default function HeaderCustom( ) {

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <div className={styles.campos}>
        <div className={styles.camposDeTexto} >
          <a href='/login' className={styles.login} >Login</a>
          <a className={styles.linguagem} >Linguagem</a>
        </div>
        <div className={styles.botoes}>
          <ButtomRouded theme='dark' text='Sobre'/>
          <ButtomRouded theme='light' text='Contato'/>
        </div>
      </div>
    </header>
  )
}
