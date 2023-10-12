import * as Yup from "yup"

const RegisterSchema = Yup.object({
        name:Yup.string().min(2).max(25).required('Please enter your name'),
        number:Yup.string().min(10).max(10).required('Please enter a number'),
        password: Yup.string().min(6).required('Please enter your password'),
        confirmPassword: Yup.string().required().oneOf([Yup.ref('password')],'Password must match'),
        dateOfBirth: Yup.date().required('Please enter a date'),
})

export default RegisterSchema