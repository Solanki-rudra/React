import React, { useState, useEffect } from 'react';
import { OtpInput, Label, Div } from '../style_component/StyledComponent';

const OtpFields = ({ otp }) => {
  const [otpValue, setOtpValue] = useState(Array(6).fill(''));
  const [isValidate, setIsValidate] = useState('');

  useEffect(() => {
    otp(otpValue.join(''));
  }, [otpValue, otp]);

  function handleOtpChange(value, index, event) {
    setIsValidate('')
    console.log(index, value);
    if (!/^[0-9]$/.test(value)) {
      console.log(true);
      setIsValidate('Enter only Numeric 0 to 9')
      return;
    }

    setOtpValue((prev) => {
      const newValue = [...prev];
      newValue[index] = value;

      if (index < newValue.length - 1 && value !== '') {
        event.target.nextSibling.focus();
      }

      return newValue;
    });
    console.log(otpValue.join(''))
  }

  function handleKeyDown(index, event) {
    setIsValidate('')
    if (event.key === 'Backspace') {
      setIsValidate('Field Required')
      if (index > 0 && otpValue[index] === '') {
        event.target.previousSibling.focus();
      }

      setOtpValue((prev) => {
        const newValue = [...prev];
        newValue[index] = '';
        return newValue;
      });
    }
  }

  return (
    <Div>
      <Label color="black">Enter OTP to verify</Label>
      {otpValue.map((value, index) => (
        <OtpInput
          key={index}
          maxLength="1"
          onChange={(e) => handleOtpChange(e.target.value, index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          value={value}
        />
      ))}
      {isValidate !== '' && <Label color="red">{isValidate}</Label>}
    </Div>
  );
};

export default OtpFields;
