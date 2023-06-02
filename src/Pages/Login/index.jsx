import React from 'react'
import styles from './Login.module.scss'
import logo from '@/assets/LogoSVG.svg'

import InputCustom from '@/Components/InputCustom'
import ButtonCustom from '@/Components/ButtonCustom'

export default function Login() {
  return (
    <div className={styles.tela} >
        <div className={styles.barraLateral}>
            <img src={logo} alt="logo AgroView" className={styles.logo} />
        </div>
            <div className={styles.barraFormulario}>
                <form className={styles.formulario} >
                    <h2>Login</h2>
                    <div className={styles.email} >
                        <p className={styles.labelEmail} >Email</p>
                        <InputCustom placeholder="Endereço de email" type="email" required />
                    </div>
                    <div className={styles.senha}>
                        <p className={styles.labelSenha} >Senha</p>
                        <InputCustom placeholder="Informe a senha" type="password" required />
                        <p className={styles.esqueciSenha}> <a> Esqueci minha senha</a></p>
                    </div>
                    <ButtonCustom/>
                    <p className={styles.registrar} >Não possui conta? <a className={styles.registrarSe} >Registre-se</a></p>
                </form>
            </div>

    </div>
  )
}