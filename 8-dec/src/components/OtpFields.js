import React, { useState, useEffect } from 'react';
import { OtpInput, Label } from './StyledComponent';

const OtpFields = ({ handleBlur, otp, isNumber }) => {
  const [otpValue, setOtpValue] = useState(Array(6).fill(null));

  useEffect(() => {
    otp(otpValue);
  }, [otpValue, otp]);

  useEffect(() => {
    if (!isNumber) {
      setOtpValue(Array(6).fill(null));
    }
  }, [isNumber]);

  function handleOtpChange(value, index, event) {
    setOtpValue([...otpValue.map((itm, ind) => (ind === index ? value : itm))]);
    if (event.key === 'Backspace' && index > 0) {
      if (!value) {
        event.target.previousSibling.focus();
      }
    } else if (value && index < otpValue.length - 1) {
      event.target.nextSibling.focus();
    }
  }

  return (
    <div>
      <Label color="black">Enter OTP to verify</Label>
      {otpValue.map((_, index) => (
        <OtpInput
          key={index}
          maxLength="1"
          onChange={(e) => {
            handleOtpChange(e.target.value, index, e);
          }}
          onKeyDown={(e) => {
            handleOtpChange(otpValue[index], index, e);
          }}
          onBlur={handleBlur}
          value={otpValue[index] ? otpValue[index] : ''}
        />
      ))}
    </div>
  );
};

export default OtpFields;
