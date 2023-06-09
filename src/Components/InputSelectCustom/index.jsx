import React, { useState } from 'react'

import styles from './InputSelectCustom.module.scss'


export default function InputSelectCustom({text}) {

    const [option, setOption] = useState([
        "",
        "ESCOLHA 1",
        "ESCOLHA 2",
        "ESCOLHA 3",
        "ESCOLHA 4"
    ])

    const add = option.map(add => add)

    return (
        <div className={styles.text} >
            <p className={styles.label} >{text}</p>
            <select className={styles.input} name={text}>
                { add.map((opcao, key) => <option value={key} key={option} > {opcao} </option>) }
            </select>
        </div>
    )
}
