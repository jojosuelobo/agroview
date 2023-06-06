import React from 'react'
import styles from './ButtonRoundDarkCustom.module.scss'

export default function ButtonRoundDarkCustom( {text} ) {
  return (
    <button  type='submit' className={styles.botao} >{text}</button>
  )
}
