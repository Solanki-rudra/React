import * as Yup from "yup";

export const MobileValidation = Yup.string()
  .matches(/^[0-9]{10}$/, 'Phone number must be a 10-digit numeric value')
  .required('Phone number is required');
  
export const NameValidation = Yup.string()
  .trim()
  .required("Role is required");
  
export const SelectListValidation = Yup.string()
  .trim()
  .required("Status is required");
  
export const PasswordValidation = Yup.string()
  .trim()
  .required("Password is required");


export const OtpValidation =  Yup.string()
      .matches(/^[0-9]{6}$/, 'Must be a 6-digit number')
      .required('Required');
  