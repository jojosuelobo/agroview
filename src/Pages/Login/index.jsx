import React from 'react'
import styles from './Login.module.scss'
import logo from '@/assets/LogoSVG.svg'

import InputCustom from '@/Components/InputCustom'
import ButtonCustom from '@/Components/ButtonCustom'
import InputFieldCustom from '@/Components/InputFieldCustom'

export default function Login() {
  return (
    <div className={styles.tela} >
        <div className={styles.barraLateral}>
            <img src={logo} alt="logo AgroView" className={styles.logo} />
        </div>
            <div className={styles.barraFormulario}>
                <form className={styles.formulario} >
                    <h2>Login</h2>
                    <InputFieldCustom text='Nome' placeholder='Informe seu nome' required />

                    <div className={styles.senha}>
                        <InputFieldCustom text='Senha' placeholder='Informe sua senha' required />
                        <p className={styles.esqueciSenha}> <a> Esqueci minha senha</a></p>
                    </div> 
                    
                    <ButtonCustom text='Entrar'/>
                    <p className={styles.registrar} >Não possui conta? <a href='@/Pages/Register' className={styles.registrarSe}>Registre-se</a></p>
                </form>
            </div>

    </div>
  )
}