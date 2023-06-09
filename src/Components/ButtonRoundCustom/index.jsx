import React from 'react'
import ButtonRoundDarkCustom from './ButtonRoundDarkCustom';
import ButtonRoundLightCustom from './ButtonRoundLightCustom';

export default function ButtomRouded({text, lightTheme}) {
  return (
    lightTheme === true ? <ButtonRoundLightCustom text={text} /> : <ButtonRoundDarkCustom text={text}/>
  )
}
