import React, { useEffect,useState } from 'react';
import { Formik } from 'formik';
import {useNavigate} from 'react-router'
import { Button, Div, TextButton,Input, FormWraper, OtpInput, Title, Label } from '../style_component/StyledComponent.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VALUES from '../constant/constants.js';
import OtpFields from './OtpFields.jsx'
import * as Yup from 'yup';
import {MobileValidation} from '../schemas/Validation.js'

const Register = ({ mobile }) => {
  const navigate = useNavigate()
  const [isNumber, setIsNumber] = useState(!mobile);
  const [otp, setOtp] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(mobile);

  function handleSubmitMobile() {
    if(otp.length !== 6) return 
    console.log(VALUES.otp === otp)
      if(VALUES.otp === otp){
        toast.success('Successfully Registered')
      }else{
        toast.error('Wrong OTP')
      }
  }

  
  return (
      <FormWraper>
      <Title>Register</Title>
       {!isNumber ?<TextButton onClick={()=>setIsNumber(true)}>Change</TextButton>:null}
        <Formik
          initialValues={{ phone:'' }}
          validationSchema={Yup.object({ phone: MobileValidation })}
          onSubmit={(values, { setSubmitting }) => {
            // if()
            if(VALUES.number === values.phone){
              toast.error('this number is already registered')
              return
            }
            setMobileNumber(values.phone)
            setIsNumber(false)
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
              {
                isNumber ? 
                <>
                <Input
                placeholder='please enter your mobile number'
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  onFocus={handleBlur}
                  value={mobile && values.phone}
                />
                {errors && <Label color='red'>{errors["phone"]}</Label>}
                </>
                 : <Title>{mobileNumber}</Title>
              }
                {!isNumber ? <OtpFields otp={(value) => setOtp(value)}  />:null}
             {
              isNumber ? <Button type="submit">NEXT</Button> :  <Button type='button' onClick={ handleSubmitMobile}>SUBMIT</Button>
             }
            </Div>
          )}
        </Formik>
          {/* {!isNumber &&  <TextButton  onClick={()=>navigate('/')}>Login with password</TextButton>} */}
      </FormWraper>
  );
};

export default Register;