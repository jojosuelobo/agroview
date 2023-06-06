import React from 'react'
import styles from './InputCustom.module.scss'

export default function InputCustom( {placeholder, type, required, obs}  ) {
  return (
    <input className={ obs == 'obs' ? styles.inputObs : styles.input} 
    placeholder={placeholder} 
    type={type} 
    required={required} /> 
  )
}
