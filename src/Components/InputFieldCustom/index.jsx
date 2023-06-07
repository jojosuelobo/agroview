import React from 'react'
import styles from './InputFieldCustom.module.scss'
import InputCustom from '@/Components/InputCustom'

export default function InputFieldCustom( {text, placeholder, required} ) {
    return (
        <div className={styles.text} >
            <p className={styles.label} >{text}</p>
            <InputCustom placeholder={placeholder} type="text" required={required}/>
        </div>
    )
}
