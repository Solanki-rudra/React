import React, { useEffect, useState } from 'react'
import { Button, Div, FormWraper, Label } from '../styles/Styled_component'
import BaseDetails from '../components/BaseDetails'
import OtpFields from '../components/OtpField'
import VALUES from '../constants/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StartPage from '../components/StartPage'
import { useNavigate } from 'react-router-dom';

function Register({ mobile, setMobile }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()
  const [forRegNumber, setForRegNumber] = useState(mobile);
  const [isClickChange, setIsClickChange] = useState(!!mobile);
  const [otpValidation, setOtpValidation] = useState('');

  useEffect(() => {
    console.log(mobile + 'mm')
    if (VALUES.number === forRegNumber) {
      // toast.success('Number already registered')
      setMobile(VALUES.number)
      navigate('/login')
      return
    }
    if (forRegNumber) setIsClickChange(true)
    setOtpValidation('')
    setMobile('')
  }, [forRegNumber, otp]);

  function handleSubmit() {
    if (otp.length < 6) {
      setOtpValidation('All OTP-Field Required')
      return
    }
    (otp === VALUES.otp) ? toast.success('Registered success') : toast.error('Incorrect OTP')
    setOtpValidation('')
  }


  return (
    <FormWraper>
      {isClickChange ? <Div>
        <BaseDetails Number={forRegNumber} title='Register' handleChangeClick={() => setIsClickChange(false)} />
        <OtpFields otp={(value) => setOtp(value)} />
        {otpValidation && <Label color='red'>{otpValidation}</Label>}
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </Div> : <StartPage title='Register' number={(num) => setForRegNumber(num)} />
      }
    </FormWraper>
  )
}

export default Register
