import React from 'react'

function Inputs({ id,type,isShow,setIsShow,formik }) {
    return (
      <>
        <div className="row">
          <label htmlFor={id}>{id}</label>
          <input
            id={id}
            name={id}
            type={type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
          />
          {(id === "password" || id === "confirmPassword") && (
            <i
              type="button"
              onClick={() => setIsShow(!isShow)}
              className={
                !isShow
                  ? "fa-eye-slash fa-regular text-end text-warning"
                  : "fa-eye fa-regular text-warning text-end"
              }
            ></i>
          )}
          {formik.errors[id] && formik.touched[id] ? (
            <p className="text-danger">{formik.errors[id]}</p>
          ) : null}
        </div>
        <br />
      </>
    );
  }

export default Inputs
