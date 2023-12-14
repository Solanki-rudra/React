import React from 'react'
import { Div, Input, Label } from '../styles/Styled_component'

function InputField({type,placeholder,name,handleBlur,handleChange,value,label='Mobile Number',width='500px'}) {
  return (
    <Div width={width}>
        <Label color='black'>{label}</Label>
      <Input 
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            onFocus={handleBlur}
            value={ value}
       />
    </Div>
  )
}

export default InputField
