import React, { useEffect, useState } from 'react'
import { Button, Div, Label, Title } from '../styles/Styled_component'
import { Formik, Form } from "formik";
import { MobileValidation } from '../schemas/Validation';
import InputField from './InputField'
import * as Yup from 'yup'

function StartPage({ title,number }) {
    const [mobileNumber, setMobileNumber] = useState('');
    function handleSubmit(values) {
        setMobileNumber(values.phone)
    }
    useEffect(() => {
        number(mobileNumber)
    }, [mobileNumber]);
    return (
        <Div>
            <Title>{title}</Title>
            <Formik
                initialValues={{ phone: '' }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={Yup.object({ phone: MobileValidation})}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <InputField type='number' placeholder='Enter phone Number' name='phone' handleBlur={handleBlur} handleChange={handleChange} value={values.phone}/>
                        {errors.phone && touched.phone && <Label color='red'>{errors.phone}</Label>}
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </Div>
    )
}

export default StartPage
