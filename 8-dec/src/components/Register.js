import React, { useRef,useState } from 'react';
import { Formik } from 'formik';
import {useNavigate} from 'react-router'
import { Button, Div, TextButton,Input, FormWraper, OtpInput, Title, Label } from './StyledComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VALUES from './constants';
import OtpFields from './OtpFields'
import * as Yup from 'yup';
import {MobileValidation} from './Validation.js'

const createRefsArray = (length) => Array(length).fill(null).map(() => useRef(null));

const Register = ({ mobile }) => {
  const navigate = useNavigate()
  const [isNumber, setIsNumber] = useState(!mobile?true:false);
  const [mobileNumber, setMobileNumber] = useState(mobile);
  const otpRefs = useRef(createRefsArray(6));

  function handleOtpChange(value, index, event) {
    console.log(value);
    if (event.key === 'Backspace' && index > 0) {
      if (value.length === 0) {
        otpRefs.current[index - 1].current.focus();
      }
    } else if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].current.focus();
    }
  }

  return (
    <div>
      <FormWraper>
       {isNumber ?  <Title>Register</Title> : <TextButton onClick={()=>setIsNumber(true)}>Change</TextButton>}

        <Formik
          initialValues={{ otp: Array(6).fill(''), phone:'' }}
          validationSchema={Yup.object({ phone: MobileValidation })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values.otp.join(''));
            // console.log(VALUES.otp === values.otp.join(''))
            if(!isNumber){
              if(VALUES.otp === values.otp.join('')){
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
                  value={values.phone}
                />
                {errors && <Label color='red'>{errors["phone"]}</Label>}
                </>
                 : <Title>{mobileNumber}</Title>
              }
                {!isNumber && <Label color='black'> Enter OTP to verify</Label>}
             {!isNumber && Array(6).fill(null).map((_, index) => (
                  <OtpInput
                    key={index}
                    maxLength='1'
                    onChange={(e) => {
                      handleChange(`otp[${index}]`)(e);
                      handleOtpChange(e.target.value, index, e);
                    }}
                    onKeyDown={(e) => {
                      handleOtpChange(values.otp[index], index, e);
                    }}
                    onBlur={handleBlur(`otp[${index}]`)}
                    value={values.otp[index]}
                    ref={otpRefs.current[index]}
                  />
                ))}
                {/* <OtpFields values={values} handleChange={handleChange} handleBlur={handleBlur} /> */}
              <Button type="submit">SUBMIT</Button>
            </Div>
          )}
        </Formik>
          {isNumber &&  <TextButton  onClick={()=>navigate('/')}>Login with password</TextButton>}
      </FormWraper>
    </div>
  );
};

export default Register;