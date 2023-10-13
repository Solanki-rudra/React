import * as Yup from "yup"

const RegisterSchema = Yup.object({
        name:Yup.string().min(2).max(25).required('Please enter your name'),
        number:Yup.string().min(10).max(10).required('Please enter a number'),
        password: Yup.string().min(6).required('Please enter your password'),
        confirmPassword: Yup.string().required().oneOf([Yup.ref('password')],'Password must match'),
        dateOfBirth: Yup.date()
        .required('Please enter a date')
        .test('age', 'Must be at least 18 years old', function(value) {
          const today = new Date();
          const birthDate = new Date(value);
          console.log(today , birthDate);
        //   const age = today.getFullYear() - birthDate.getFullYear();
        //   const monthDiff = today.getMonth() - birthDate.getMonth();
        //   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        //     age--;
        //   }
        //   return age >= 18;
        }),
})

export default RegisterSchema