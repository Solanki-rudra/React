import React, { useEffect, useState } from "react";
import { useFormik, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import RegisterSchema from "./RegisterSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "http://localhost:3200/comments/";

function FormForData() {
  const [isShow, setIsShow] = useState({ pass: false, confPass: false });
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
      // console.log(data)
      // if(initialValues.id != data.id) {
      // }
      // setShowNotification(true)
      if (response.ok) {
        let data = await response.json();
        setForUpdateValues(data);
      } else {
        throw new Error("some error occurred");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }
  // console.log('this '+ initialValues.id)
  return (
    <div className="formWraper m-auto bg-success p-5 rounded">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        enableReinitialize
        onSubmit={async (values, action) => {
          // console.log(values)
          let method = "PATCH";
          let id = userId;
          if (!id) {
            method = "POST";
            id = "";
          }
          // const data = {
          //   name: values.name,
          //   number: values.number,
          //   password: values.password,
          //   confirmPassword: values.confirmPassword,
          //   dateOfBirth: values.dateOfBirth,
          // };
          // console.log(action)
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
              localStorage.setItem(
                "notification",
                JSON.stringify({
                  type: "success",
                  message: `Data ${id ? "Updated" : "Added"} Successfully`,
                })
              );
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
            <div className="row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <p className="text-danger">{errors.name}</p>
              ) : null}
            </div>
            <br />
            <div className="row">
              <label htmlFor="number">Number</label>
              <input
                id="number"
                name="number"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              {errors.number && touched.number ? (
                <p className="text-danger">{errors.number}</p>
              ) : null}
            </div>
            <br />
            <div className="row">
              <label htmlFor="password">Password</label>
                <div className="col w-100 bg-white password-input p-0">
                <input
                className="password-input"
                id="password"
                name="password"
                type={isShow.pass ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <i type="button"
                onClick={() => setIsShow((pv) => ({ ...pv, pass: !pv.pass }))}
                 className={!isShow.pass?'fa-eye-slash fa-regular text-success':'fa-eye fa-regular text-success'}></i>
                </div>
              {errors.password && touched.password ? (
                <p className="text-danger">{errors.password}</p>
              ) : null}
            </div>
            <br />
            <div className="row">
              <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="col w-100 bg-white password-input p-0">
                <input
                className="password-input"
                id="confirmPassword"
                name="confirmPassword"
                type={isShow.confPass ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <i type="button"
                onClick={() => setIsShow((pv) => ({ ...pv, confPass: !pv.confPass }))}
                 className={!isShow.confPass?'fa-eye-slash fa-regular text-success':'fa-eye fa-regular text-success'}></i>
                </div>

              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="text-danger">{errors.confirmPassword}</p>
              ) : null}
            </div>
            <br />
            <div className="row">
              <label htmlFor="dateOfBirth">DOB</label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateOfBirth}
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <p className="text-danger">{errors.dateOfBirth}</p>
              ) : null}
            </div>
            <br />
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
