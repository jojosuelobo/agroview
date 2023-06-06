import React from 'react'
import styles from './ButtonCustom.module.scss'

export default function ButtonCustom( {text} ) {
  return (
    <div className={styles.componente}>
      <button type='submit' className={styles.botao} >{text}</button>
    </div>
  )
}
