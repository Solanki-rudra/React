import React,{useState} from 'react'
import { Div, FlexDiv, Font, Input, Label } from '../styles/Styled_component'

function InputPassword({handleBlur,handleChange,value}) {
    const [isPassShow, setIsPassShow] = useState(true);
  return (
    <Div>
      <Label color='black'>Password</Label>
      <FlexDiv>
      <Input 
      type={isPassShow?'text':'password'}
      placeholder='Enter password'
      name='password'
      onChange={handleChange}
      onFocus={handleBlur}
      value={ value}
      /><Font onClick={() => setIsPassShow(pv => !pv)} className={`fa-solid ${isPassShow ? 'fa-eye' : 'fa-eye-slash'} `}></Font>
      </FlexDiv>
    </Div>
  )
}

export default InputPassword
