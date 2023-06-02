import React from 'react'
import styles from './InputCustom.module.scss'

export default function InputCustom( {placeholder, type, required}  ) {
  return (
    <input className={styles.input} placeholder={placeholder} type={type} required={required} /> 
  )
}