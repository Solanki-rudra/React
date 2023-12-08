import React,{useState} from 'react'
import { Formik } from 'formik';
import { Button, Div, FormWraper, Input, Label,FlexDiv,Font, Title,TextButton } from './StyledComponent'
import VALUES from './constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{useNavigate } from 'react-router';
import * as Yup from 'yup'
import {MobileValidation} from './Validation.js'

function WelcomePage({setMobile}) {
    const navigate = useNavigate()
    const [isNumber, setIsNumber] = useState(false);
    const [isPassShow, setIsPassShow] = useState(true);
  return (
    <FormWraper>
      {!isNumber ? <Title>Welcome</Title>:<TextButton    onClick={()=>setIsNumber(false)}>Change</TextButton>}
      <Formik
       initialValues={{ phone : '',password:'' }}
       validationSchema={Yup.object({ phone: MobileValidation })}
       onSubmit={(values, { setSubmitting }) => {
        if(isNumber){
            console.log(values.password, VALUES.password)
            console.log(values.password === VALUES.password)
            if(values.password === VALUES.password){
                toast.success("Login Successfully")
            }else{
                toast.error('Invalid password')
            }
        } else{
            setIsNumber(VALUES.number === values.phone)
            setMobile(values.phone)
            VALUES.number !== values.phone && navigate('/register')
        }

       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <Div as={"form"} onSubmit={handleSubmit}>
            <Label color='black'> Mobile Number</Label>
{ !isNumber?          <Input
           placeholder='please enter your mobile number'
             type="number"
             name="phone"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phone}
           /> : <Title>{values.phone}</Title>}
            {
                isNumber &&   <Div> <Label color='black'>Password</Label>
                <FlexDiv>
                <Input
                placeholder='please enter your password'
                  type={isPassShow?'text':'password'}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                /><Font onClick={()=>setIsPassShow(pv=>!pv)} className={` fa-solid ${isPassShow?'fa-eye':'fa-eye-slash'} `}></Font>
                </FlexDiv>
                </Div>          
               
            }
           <br />
            {errors.phone && touched.phone && <Label color='red'> {errors.phone}</Label>}
      <Button type="submit">{isNumber ? 'SUBMIT':'NEXT'}</Button>
         </Div>
       )}
     </Formik>
       {isNumber &&  <TextButton onClick={()=>navigate('/register')}>Or login via otp</TextButton>}
    </FormWraper>
  )
}

export default WelcomePage
