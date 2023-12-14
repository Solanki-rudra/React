import React, { useState, useContext, useEffect } from 'react'
import { Button, Container, Label, Row, RowError } from '../styles/Styled_component'
import { Form, Formik } from 'formik'
import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import CheckBoxGroup from '../components/CheckBoxGroup'
import { NameValidation, SelectListValidation } from '../schemas/Validation'
import * as Yup from 'yup'
import { userRoleContext } from '../App';
import { Link, useNavigate, useParams } from 'react-router-dom'

function RoleManagement() {
  const { id } = useParams()
  let staticLabels = {
    orders: { View: false, Add: false, Edit: false, Update: false, Delete: false },
    invite_code: { View: false, Add: false },
    medicine_master: { View: false, Add: false, Edit: false, Update: false, Delete: false },
    coupon: { View: false, Add: false, Edit: false, Update: false, Delete: false }
  }
  let staticDetails ={role: '', status: ''}
  const { userRoleData, setUserRoleData } = useContext(userRoleContext);
  const navigate = useNavigate();
  const [initialValueFormik, setInitialValueFormik] = useState({});
  const [checkBoxLabels, setCheckBoxLabels] = useState({});

  useEffect(() => {
    if (id) {
      let forEditData = userRoleData.find((user) => user.id === Number(id))
      if (forEditData) {
        setInitialValueFormik({role:forEditData.role,status:forEditData.status})
        setCheckBoxLabels({ orders: forEditData.orders, invite_code: forEditData.invite_code, medicine_master: forEditData.medicine_master, coupon: forEditData.coupon })
      }else{
        setInitialValueFormik(staticDetails)
        setCheckBoxLabels(staticLabels)
        navigate('/role-management')
      }
    }else{
      setInitialValueFormik(staticDetails)
      setCheckBoxLabels(staticLabels)
    }
  }, []);

  function handleDelete() {
    if(window.confirm('Are you sure for delete?')){
      let filteredData = userRoleData.filter((data)=>data.id !== Number(id))
      let newData = filteredData.map((data, index) => ({ ...data, id: index + 1 }))
      setUserRoleData(newData)
      navigate('/user-roles')
    }
  }

  function handleCheckBoxChange(values, label) {
    let newLabels = { ...checkBoxLabels };
    newLabels[label] = values;
    setCheckBoxLabels(newLabels);
  }

  function handleSubmit(values) {
    console.log(values)
    if (id) {
      let index = userRoleData.findIndex((user) => user.id === Number(id));
      if (index !== -1) {
        let updatedData = [...userRoleData];
        updatedData[index] = { ...values, ...checkBoxLabels, id: Number(id) };
        setUserRoleData(updatedData);
        navigate('/user-roles');
        return;
      }
    }
    let newObject = { id: userRoleData.length + 1, ...values, ...checkBoxLabels }
    setUserRoleData([...userRoleData, newObject])
    navigate('/user-roles')
  }

  return (
    <Container>
      <Formik
        initialValues={   {...initialValueFormik,...checkBoxLabels} }
        enableReinitialize
        validationSchema={Yup.object({ role: NameValidation, status: SelectListValidation })}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <InputField
                type='text'
                placeholder='Enter Role'
                name='role'
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.role}
                label='Role'
                width='45%'
              />
              <SelectField
                name='status'
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.status}
                label='Status'
                options={['Active', 'De-active']}
                width='45%'
              />
            </Row>
            <RowError>
              {errors.role && touched.role && <Label color='red'>{errors.role}</Label>}
              {errors.status && touched.status && <Label color='red' marleft='54%' >{errors.status}</Label>}
            </RowError>
            <Row>
              {Object.keys(checkBoxLabels).map((label, index) => (
                <CheckBoxGroup key={index} handleChange={handleChange} updateData={(value) => handleCheckBoxChange(value, label)} label={label} initialOptions={checkBoxLabels[label]} />
              ))}
            </Row>
            <Button type='submit' width='fit-content'>
              {id?'Update Data':'Add user Role'}
            </Button>
            {id && <Button onClick={handleDelete} type='button' backgroundcolor='red' width='fit-content'>
              Delete
            </Button>}
            <Link to='/user-roles'><Button type='button' backgroundcolor='red' width='fit-content'>Cancel</Button></Link>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
export default RoleManagement;
