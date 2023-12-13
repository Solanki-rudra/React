import React, { useState, useEffect } from 'react';
import { OtpInput, Label, Div } from '../styles/Styled_component'

const OtpFields = ({ otp }) => {
  const [otpValue, setOtpValue] = useState(Array(6).fill(''));

  useEffect(() => {
    otp(otpValue.join(''));
  }, [otpValue, otp]);

  function handleOtpChange(value, index, event) {
    if (!/^[0-9]$/.test(value)) return
    setOtpValue((prev) => {
      const newValue = [...prev];
      newValue[index] = value;
      if (index < newValue.length - 1 && value !== '') {
        event.target.nextSibling.focus();
      }
      return newValue;
    });
  }

  function handleKeyDown(index, event) {
    if (event.key === 'Backspace') {
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
    </Div>
  );
};

export default OtpFields;
