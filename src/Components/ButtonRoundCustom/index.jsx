import React from 'react'
import ButtonRoundDarkCustom from './ButtonRoundDarkCustom';
import ButtonRoundLightCustom from './ButtonRoundLightCustom';

export default function ButtomRouded({text, theme}) {
  return (
    theme == 'dark' ? <ButtonRoundDarkCustom text={text}/> : <ButtonRoundLightCustom text={text} />
  )
}
