import React from 'react'
import styles from './Header.module.scss';
import logo from '@/assets/LogoSVG.svg'
import ButtomRouded from '@/Components/ButtonRoundCustom';
import { useLocation } from 'react-router-dom';


export default function HeaderCustom() {

  const location = useLocation()

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo' />
      <div className={styles.campos}>
        <div className={styles.camposDeTexto} >
          <a href='/login' className={styles.login} >Login</a>
          <a className={styles.linguagem} >Linguagem</a>
        </div>
        <div className={styles.botoes}>
          <a href='/sobre'> <ButtomRouded lightTheme={ location.pathname === '/sobre' ? true : false } text='Sobre'/> </a>
          <a href='/contato'> <ButtomRouded lightTheme={ location.pathname === '/contato' ? true : false } text='Contato'/> </a>
        </div>
      </div>
    </header>
  )
}
