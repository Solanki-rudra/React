import React, { useEffect, useState } from "react";
import { useFormik, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import RegisterSchema from "./RegisterSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "http://localhost:3200/comments/";

function FormForData() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [initialValues, setForUpdateValues] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) getDataFromApi(userId);
  }, []);

  async function getDataFromApi(userId = "") {
    try {
      let response = await fetch(url + userId);
      if (response.ok) {
        let data = await response.json();
        setForUpdateValues(data);
      } else {
        navigate("/*");
      }
    } catch (error) {
    }
  }
  return (
    <div className="formWraper m-auto bg-success p-5 rounded">
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        enableReinitialize
        onSubmit={async (values, action) => {
          let method = "PATCH";
          let id = userId;
          if (!id) {
            method = "POST";
            id = "";
          }
          try {
            console.log(values);
            let response = await fetch(url + id, {
              method: method,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            if (response.ok) {
              toast.success(`Data ${id ? "Updated" : "Added"} Successfully`, {
                position: "top-center",
                autoClose: 2000,
              });
              navigate("/");
            } else {
              throw new Error("Failed to submit the form");
            }
          } catch (error) {
            toast.error(error.message, {
              position: "top-center",
              autoClose: 2000,
            });
          }
          action.resetForm();
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Inputs
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="name"
              type="text"
              values={values}
              errors={errors}
              touched={touched}
            />

            <Inputs
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="number"
              type="number"
              values={values}
              errors={errors}
              touched={touched}
            />

            <Inputs
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="password"
              type={isShowPassword ? "text" : "password"}
              values={values}
              errors={errors}
              touched={touched}
              isShow={isShowPassword}
              setIsShow={setIsShowPassword}
            />

            <Inputs
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="confirmPassword"
              type={isShowConfirmPassword ? "text" : "password"}
              values={values}
              errors={errors}
              touched={touched}
              isShow={isShowConfirmPassword}
              setIsShow={setIsShowConfirmPassword}
            />

            <Inputs
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="dateOfBirth"
              type="date"
              values={values}
              errors={errors}
              touched={touched}
            />

            <button className="btn bg-warning" type="submit">
              {userId ? "Update" : "Submit"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default FormForData;

function Inputs({
  handleBlur,
  handleChange,
  id,
  type,
  values,
  errors,
  touched,
  isShow,
  setIsShow,
}) {
  return (
    <>
      <div className="row">
        <label htmlFor={id}>{id}</label>
        <input
          id={id}
          name={id}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
        />
        {
          (id === 'password' || id === 'confirmPassword') && (
            <i
              type="button"
              onClick={() => setIsShow(!isShow)}
              className={!isShow ? 'fa-eye-slash fa-regular text-end text-warning' : 'fa-eye fa-regular text-warning text-end'}
            ></i>
          )
        }
        {errors[id] && touched[id] ? (
          <p className="text-danger">{errors[id]}</p>
        ) : null}
      </div>
      <br />
    </>
  );
}
