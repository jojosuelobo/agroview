import React from 'react'
import styles from './Contact.module.scss'

import logo from '@/assets/LogoSVG.svg'
import image from '@/assets/ContactImage.svg'

import HeaderCustom from '@/Components/HeaderCustom'
import FooterCustom from '@/Components/FooterCustom'
import InputFieldCustom from '@/Components/InputFieldCustom'
import ButtonCustom from '@/Components/ButtonCustom'
import InputSelectCustom from '@/Components/InputSelectCustom'

export default function Contact() {
  return (
    <>
      <HeaderCustom />
      <div className={styles.infos}>
        <h1>Quer saber mais a respeito?</h1>
        <h2>Deixe suas informações conosco em para caso de:</h2>
        <ul>
          <li>Demonstração do produto</li>
          <li>Atualizações do serviço</li>
          <li>Contato comercial</li>
          <li>Parcerias</li>
        </ul>
        <a>Ou entre em contato via e-mail</a>
        <p className={styles.email} >agroview@comercial.com.br</p>
        <img src={image} className={styles.image} />
      </div>

      <form className={styles.form} >
        <InputFieldCustom text='Nome' /> 
        <InputFieldCustom text='E-mail' /> 
        <InputSelectCustom text='Tenho interesse em' />
        <InputFieldCustom text='Observação' obs='obs' /> 
        <ButtonCustom text='Enviar'/>
      </form>
      <FooterCustom/>
    </>
  )
}
