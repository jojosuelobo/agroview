import React from 'react'
import ButtonRoundDarkCustom from '@/Components/ButtonRoundDarkCustom';
import ButtonRoundLightCustom from '@/Components/ButtonRoundLightCustom';

export default function ButtomRouded({text, theme}) {
  return (
    theme == 'dark' ? <ButtonRoundDarkCustom text={text}/> : <ButtonRoundLightCustom text={text} />
  )
}
