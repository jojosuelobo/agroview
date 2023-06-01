import React from 'react'
import styles from './Login.module.scss'
import logo from '@/assets/LogoSVG.svg'

import InputCustom from '@/Components/InputCustom'

export default function Login() {
  return (
    <div className={styles.tela} >
        <div className={styles.barraLateral}>
            <img src={logo} alt="logo AgroView" className={styles.logo} />
        </div>
            <div className={styles.barraFormulario}>
                <h2>Login</h2>
                <form className={styles.formulario} >
                    <div className={styles.email} >
                        <p>Email</p>
                        <InputCustom placeholder="Endereço de email" type="email" required />
                    </div>
                    <div className={styles.senha}>
                        <p>Senha</p>
                        <InputCustom placeholder="Informe a senha" type="password" required />
                        <p>Esqueci minha senha</p>
                    </div>
                    <button className={styles.botaoEnviar} type="submit">Entrar</button>
                    <p className={styles.registrar} >Não possui conta? Registre-se</p>
                </form>
            </div>

    </div>
  )
}