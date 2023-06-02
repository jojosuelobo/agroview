import React from 'react'
import styles from './Register.module.scss'
import logo from '@/assets/LogoSVG.svg'

import InputCustom from '@/Components/InputCustom'
import ButtonCustom from '@/Components/ButtonCustom'


export default function Register() {
    return (
        <div className={styles.tela} >
            <div className={styles.barraFormulario}>
                <form className={styles.formulario} >
                    <h2>Criar uma conta</h2>
                    <div className={styles.nome} >
                        <p className={styles.labelNome} >Nome completo</p>
                        <InputCustom placeholder="Informe seu nome" type="text" required />
                    </div>
                    <div className={styles.email} >
                        <p className={styles.labelEmail} >Email</p>
                        <InputCustom placeholder="Endereço de email" type="email" required />
                    </div>
                    <div className={styles.senha}>
                        <p className={styles.labelSenha} >Senha</p>
                        <InputCustom placeholder="Informe a senha" type="password" required />
                    </div>
                    <ButtonCustom />
                    <p className={styles.entrar} >Já possui conta? <a className={styles.entrarSe} >Entrar</a></p>
                </form>
            </div>
            <div className={styles.barraLateral}>
                <img src={logo} alt="logo AgroView" className={styles.logo} />
            </div>
        </div>
    )
}
