import React from 'react'
import styles from './Register.module.scss'
import logo from '@/assets/LogoSVG.svg'

import ButtonCustom from '@/Components/ButtonCustom'
import InputFieldCustom from '@/Components/InputFieldCustom'


export default function Register() {
    return (
        <div className={styles.tela} >
            <div className={styles.barraFormulario}>
                <form className={styles.formulario} >
                    <h2>Criar uma conta</h2>
                    <InputFieldCustom text='Nome' placeholder='Informe seu nome' required />
                    <InputFieldCustom text='Email' placeholder='Informe seu E-mail' required />
                    <InputFieldCustom text='Senha' placeholder='Digite sua senha' required />
                    <ButtonCustom text='Criar conta'/>
                    <p className={styles.entrar} >Já possui conta? <a href='/login' className={styles.entrarSe} >Entrar</a></p>
                </form>
            </div>
            <div className={styles.barraLateral}>
                <img src={logo} alt="logo AgroView" className={styles.logo} />
            </div>
        </div>
    )
}
