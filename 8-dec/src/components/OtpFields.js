// OtpFields.js
import React, { useRef } from 'react';
import { OtpInput, Label } from './StyledComponent'; 

const createRefsArray = (length) => Array(length).fill(null).map(() => useRef(null));

const OtpFields = ({ values, handleChange, handleBlur, }) => {
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
      <Label color='black'>Enter OTP to verify</Label>
      {Array(6).fill(null).map((_, index) => (
        <OtpInput
          key={index}
          maxLength='1'
          onChange={(e) => {
            handleChange(`otp[${index}]`)(e);
            handleOtpChange(e.target.value, index, e);
          }}
          onBlur={handleBlur(`otp[${index}]`)}
          value={values.otp[index]}
          ref={otpRefs.current[index]}
        />
      ))}
    </div>
  );
};

export default OtpFields;
