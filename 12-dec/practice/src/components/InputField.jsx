import React from 'react'
import { Div, Input, Label } from '../styles/Styled_component'

function InputField({type,placeholder,name,handleBlur,handleChange,value}) {
  return (
    <Div>
        <Label color='black'>Mobile Number</Label>
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
