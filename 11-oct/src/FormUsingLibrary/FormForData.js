import React,{useEffect, useState} from "react";
import { useFormik,Formik } from "formik";
import { Link,useNavigate, useParams } from "react-router-dom";
import RegisterSchema from "./RegisterSchema";

const url = 'http://localhost:3200/comments/'

function FormForData() {
    const [isShow , setIsShow  ] = useState({pass:true,confPass:true});
    const [initialValues, setInitialValues] = useState({
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
      });
    const navigate = useNavigate()
    const {userId} = useParams()

    useEffect(() => {
        getDataFromApi(userId)
    }, [initialValues.id != userId]); 
    
    async function getDataFromApi(userId='') {
        try {
          let response = await fetch(url+userId)
          let data= await response.json()
          console.log(data)
          // if(initialValues.id != data.id) { 
              setInitialValues(data)
          // }
          // setShowNotification(true)
        } catch (error) {
          alert(error.message)
        }
      }
      console.log('this '+ initialValues.id)
  return (
    <Formik
    initialValues={initialValues}
    validationSchema = {RegisterSchema}
    onSubmit={async (values,action) => {
      // console.log(values)
      console.log(action)
      try {
        let response = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        if (response.ok) {
            navigate('/')
        }
    } catch (error) {
        alert(error.message)
    }
      action.resetForm();
    }}
  >
    {({handleSubmit,values,handleChange,handleBlur,errors,touched,setValues}) => (
      <form onSubmit={handleSubmit}>
        {/* {setValues(initialValues)} */}
        <div className="">
          <label htmlFor="name">Name</label>
           <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name ? <p className="text-danger">{errors.name}</p> : null}
        </div>
        <br />
      <div>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          name="number"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.number}
        />
          {errors.number && touched.number ? <p className="text-danger">{errors.number}</p> : null}
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type={isShow.pass?'text':'password'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <button type="button" onClick={()=>setIsShow((pv)=>({...pv,pass:!pv.pass}))}>{isShow.pass?'Hide':'Show'}</button>
          {errors.password && touched.password ? <p className="text-danger">{errors.password}</p> : null}
      </div>

      <br />
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={isShow.confPass?'text':'password'}
          onChange={handleChange}   
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
        <button type="button" onClick={()=>setIsShow((pv)=>({...pv,confPass:!pv.confPass}))}>{isShow.confPass?'Hide':'Show'}</button>
          {errors.confirmPassword && touched.confirmPassword ? <p className="text-danger">{errors.confirmPassword}</p> : null}
      </div>
      <br />
      <div>
        <label htmlFor="dateOfBirth">DOB</label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.dateOfBirth}
        />
        {errors.dateOfBirth && touched.dateOfBirth ? <p className="text-danger">{errors.dateOfBirth}</p> : null}
      </div>
      <br />
        <button type="submit">Submit</button>
      </form>
    )}
  </Formik>
  );
}
export default FormForData;
