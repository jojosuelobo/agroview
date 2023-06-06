import React, { useState } from 'react'

import styles from './InputSelectCustom.module.scss'


export default function InputSelectCustom({text}) {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className={styles.text} >
            <p className={styles.label} >{text}</p>
            <select className={styles.input} name={text}>
                <option value=''></option>
                <option value='1'>OPÇÃO 1</option>
                <option value='2'>OPÇÃO 2</option>
            </select>
        </div>
    )
}
