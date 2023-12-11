import React, { useEffect,useState } from 'react';
import { Formik } from 'formik';
import {useNavigate} from 'react-router'
import { Button, Div, TextButton,Input, FormWraper, OtpInput, Title, Label } from './StyledComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VALUES from './constants';
import OtpFields from './OtpFields'
import * as Yup from 'yup';
import {MobileValidation} from './Validation.js'

const Register = ({ mobile }) => {
  const navigate = useNavigate()
  const [isNumber, setIsNumber] = useState(!mobile);
  const [otp, setOtp] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(mobile);

  function handleSubmitMobile() {
    if(otp.join('').length !== 6) return 
    console.log(VALUES.otp === otp.join(''))
      if(VALUES.otp === otp.join('')){
        toast.success('Successfully Registered')
      }else{
        toast.error('Wrong OTP')
      }
  }

  
  return (
    <div>
      <FormWraper>
       {isNumber ?  <Title>Register</Title> : <TextButton onClick={()=>setIsNumber(true)}>Change</TextButton>}
        <Formik
          initialValues={{ phone:'' }}
          validationSchema={Yup.object({ phone: MobileValidation })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(otp)
            // console.log(values.otp.join(''));
            if(otp.join('').length !== 6) return 
            console.log(VALUES.otp === otp.join(''))
            if(isNumber){
              if(VALUES.otp === otp.join('')){
                toast.success('Successfully Registered')
              }else{
                toast.error('Wrong OTP')
              }
            }else{
                console.log(values.phone)
                setMobileNumber(values.phone)
                setIsNumber(false)
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
                <OtpFields otp={(value) => setOtp(value)} isNumber={isNumber} />
             {
              isNumber ? <Button type="submit">SUBMIT</Button> :  <Button type='button' onClick={ handleSubmitMobile}>SUBMIT</Button>
             }
            </Div>
          )}
        </Formik>
          {!isNumber &&  <TextButton  onClick={()=>navigate('/')}>Login with password</TextButton>}
      </FormWraper>
    </div>
  );
};

export default Register;