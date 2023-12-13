import React, { useEffect, useState } from 'react'
import { Button, Div, Label, TextButton } from '../styles/Styled_component'
import BaseDetails from './BaseDetails'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PasswordValidation } from '../schemas/Validation'
import { Formik, Form } from "formik";
import InputPassword from './InputPassword'
import VALUES from '../constants/constants'
import OtpField from './OtpField'

function LoginSecPage({ number, setIsLogin }) {
  const [isLoginWithOTP, setIsLoginWithOTP] = useState(false);
  const [Otp, setOtp] = useState('');
  const [otpValidation, setOtpValidation] = useState('');


  function handleSubmit(values) {
    setOtpValidation('')
    if (isLoginWithOTP) {
      if (Otp.length < 6) {
        setOtpValidation('Field Required')
        return
      }
      (Otp === VALUES.otp) ? toast.success('Login success') : toast.error('Incorrect OTP')
    } else {
      (values.password === VALUES.password) ? toast.success('Login success') : toast.error('Incorrect Password')
    }
  }
  useEffect(() => {
    setOtpValidation('')
  }, [Otp]);

  return (
    <Div>
      <BaseDetails title='Login' Number={number} handleChangeClick={() => setIsLogin(false)} />
      <Formik
        initialValues={!isLoginWithOTP && { password: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={Yup.object({ password: PasswordValidation })}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            {isLoginWithOTP ? <OtpField otp={(value) => setOtp(value)} /> : <InputPassword handleBlur={handleBlur} handleChange={handleChange} value={values.password} />}
            {!isLoginWithOTP ? errors.password && touched.password && <Label color='red'>{errors.password}</Label> : otpValidation && <Label color='red'>{otpValidation}</Label>}
            {!isLoginWithOTP ? <Button type="submit">Submit</Button > : <Button type='button' onClick={(values) => handleSubmit(values)}>Submit</Button>}
          </Form>
        )}
      </Formik>
      <TextButton onClick={() => setIsLoginWithOTP(!isLoginWithOTP)}>{isLoginWithOTP ? 'Login with Password' : 'Login with OTP'}</TextButton>

    </Div>
  )
}
export default LoginSecPage