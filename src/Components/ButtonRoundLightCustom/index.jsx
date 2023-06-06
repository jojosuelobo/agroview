import React from 'react'
import styles from './ButtonRoundLightCustom.module.scss'

export default function ButtonRoundLightCustom( {text} ) {
  return (
    <button  type='submit' className={styles.botao} >{text}</button>
  )
}
