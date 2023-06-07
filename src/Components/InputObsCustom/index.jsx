import React from 'react'
import styles from './InputObsCustom.module.scss'

export default function InputObsCustom({text}) {
    return (
        <div className={styles.text} >
             <p className={styles.label} >{text}</p> 
            <textarea className={styles.input} cols='30' rows='5'></textarea> 
        </div>
    )
}
