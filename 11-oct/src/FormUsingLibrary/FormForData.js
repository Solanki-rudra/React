import React, { useEffect, useReducer, useState } from "react";
import { useFormik, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import RegisterSchema from "./RegisterSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inputs from "./Inputs";

const url = "http://localhost:3200/comments/";

function FormForData() {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isRunSubmitOrUpdate, setIsRunSubmitOrUpdate] = useState(false);
  const [initialValues, setForUpdateValues] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });
  const navigate = useNavigate();
  let { userId } = useParams();

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
    } catch (error) {}
  }

  return (
    <div className="formWraper m-auto bg-success p-5 rounded">
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        enableReinitialize
        onSubmit={async (values, action) => {
          if (!isRunSubmitOrUpdate) {
            setIsRunSubmitOrUpdate(true)
            let id = userId;
            if (!id) id = ""
            try {
              let response = await fetch(url + id, {
                method: id ? "PATCH" : "POST",  
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
            finally{
              setIsRunSubmitOrUpdate(false)
            }
          }
          action.resetForm();
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>

            <Inputs formik = {formik} id="name" type="text" />
            <Inputs formik = {formik} id="number" type="number" />
            
            <Inputs formik = {formik} id="password" type={isShowPassword ? "text" : "password"} isShow={isShowPassword} setIsShow={setIsShowPassword} />

            <Inputs formik = {formik} id="confirmPassword" type={isShowConfirmPassword ? "text" : "password"} isShow={isShowConfirmPassword} setIsShow={setIsShowConfirmPassword} />

            <Inputs formik = {formik} id="dateOfBirth" type="date" />

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