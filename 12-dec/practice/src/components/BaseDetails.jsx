import React, { useEffect } from 'react'
import { Div, Label, TextButton, Title } from '../styles/Styled_component'

function BaseDetails({title,Number,handleChangeClick}) {
  return (
    <Div>
        <Title>{title}</Title>
        <TextButton onClick={handleChangeClick}>Change</TextButton>
        <Label>Mobile Number</Label>
        <Title>{Number}</Title>
    </Div>
  )
}

export default BaseDetails
