import React,{useState} from 'react'
import { Formik } from 'formik';
import { Button, Div, FormWraper, Input, Label, FlexDiv, Font, Title, TextButton } from '../style_component/StyledComponent.js'
import VALUES from '../constant/constants.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router';
  import * as Yup from 'yup'
import { MobileValidation, PasswordValidation } from '../schemas/Validation.js'
import OtpFields from './OtpFields.jsx';

function Login({ setMobile, mobile }) {
    const navigate = useNavigate()
  
  function handleSubmitMobile(values,errors) {
    console.log('hans')
    console.log('hans')
    // console.log(values)
    if (!values.password && !otp){
      return
    }
    // console.log(otp)
    if (isLoginWithOtp) {
      if(VALUES.otp === otp){
        toast.success('Successfully Registered')
      }else{
        toast.error('Wrong OTP')
      }
    } else {
      if (values.password === VALUES.password) {
        toast.success("Login Successfully")
      } else {
        toast.error('Invalid password')
      }
    }
  }

  function handleChangeBtn() {
    setMobile(null)
     setIsNumber(false)
  }

  const [isNumber, setIsNumber] = useState(!!mobile);
  const [otp, setOtp] = useState(null);
  const [isPassShow, setIsPassShow] = useState(true);
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  console.log(mobile)
  return (
    <FormWraper>
        <Title>{!isNumber?'Welcome':'Login'}</Title>
      {!isNumber ? null : <TextButton onClick={handleChangeBtn}>Change</TextButton>}
      <Formik
        initialValues={mobile ? { password: '' } : { phone: '', password: '' }}
        validationSchema={mobile?Yup.object({ password: PasswordValidation}):Yup.object({ phone: MobileValidation})}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values)
          console.log('ons')
          // console.log(otp)
          if (isNumber) {
            if (values.password === VALUES.password) {
              toast.success("Login successful")
            } else {
              toast.error('Invalid password')
            }
          } else {
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
            {!isNumber ? <Input
              placeholder='please enter your mobile number'
              type="number"
              name="phone"
              onChange={handleChange}
              onFocus={handleBlur}
              value={ mobile && values.phone }
            /> : <Title>{mobile}</Title>}
            {
              isNumber ? !isLoginWithOtp ? <Div> <Label color='black'>Password</Label>
                <FlexDiv>
                  <Input
                    placeholder='please enter your password'
                    type={isPassShow ? 'text' : 'password'}
                    name="password"                                                                         
                    onChange={handleChange}
                    onFocus={handleBlur}
                    value={values.password}
                  /><Font onClick={() => setIsPassShow(pv => !pv)} className={`fa-solid ${isPassShow ? 'fa-eye' : 'fa-eye-slash'} `}></Font>
                </FlexDiv>
              </Div> : <OtpFields otp={(value) => setOtp(value)} /> : null
            }
            <br />
            {errors.phone && touched.phone ? <Label color='red'> {errors.phone}</Label> : null}
            
            {mobile && isNumber ? <Button type='button' onClick={() => handleSubmitMobile(values,errors)}>SUBMIT</Button> : <Button type="submit">{isNumber ? 'SUBMIT' : 'NEXT'}</Button>}
          </Div>
        )}
      </Formik>
      {isNumber && <TextButton onClick={() => setIsLoginWithOtp(pv => !pv)}>{isLoginWithOtp ? 'Login with password' : 'Or login via otp'}</TextButton>}
    </FormWraper>
  )
}

export default Login
