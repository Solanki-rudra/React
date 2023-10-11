import React, { useState, useContext, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";
// import {editObj} from './LandingPage.js'

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const { useId } = useParams();
  // const objForEdit = useContext(editObj);
  const url = "http://localhost:3500/comments/";
  // const objForEdit = location.state
  // let userId = new URLSearchParams(location.search).get('userId');
  // const [dataFromQuery, setDataFromQuery] = useState(null);
  // const [objForEdit, setObjForEdit] = useState(location.state);
  const [searchParams, setSearchParams] = useSearchParams();

  const [objOfData, setObjOfData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [objOfValidation, setObjofValidation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  // useEffect(() => {
  //         searchParams.get('userId') !== null ?  getUserId()  : setObjOfData(location.state)
  // }, []);

  // async function getUserId() {
  //     try {
  //         let response = await fetch(url+searchParams.get('userId'))
  //         let data = await response.json()
  //         setObjOfData(data)
  //         console.log(data)
  //     } catch (error) {
  //         alert('Data is not available')
  //     }
  // }
  // console.log(location)

  // console.log(location.search)
  // var searchParamsForQuery = new URLSearchParams(location.search);

  useEffect(() => {
    getUserData();
  }, [useId]);

  async function getUserData() {
    if (useId) {
      try {
        let response = await fetch(url + useId);
        console.log(response);
        if (response.status === 404) throw new Error("Page not found");
        let data = await response.json();
        setObjOfData(data);
        // return data
        // navigate(`/add/${useId}`,{state:data})
        // console.log(data)
      } catch (error) {
        navigate("/*");
      }
    }
  }

  // console.log(useId)

  // console.log('for edit '+ objForEdit)
  // console.log(searchParams.get('userId'))
  // setSearchParams({userId:objForEdit.id})
  async function handleSubmit(e) {
    // console.log(dataFromQuery)
    e.preventDefault();
    //   if (validation(objOfData)) {
    if (!useId) {
      console.log("post");
      console.log(objOfData);
      try {
        let response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(objOfData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    } else {
      console.log("patch");
      try {
        let response = await fetch(url + objOfData.id, {
          method: "PATCH",
          body: JSON.stringify(objOfData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    }
    //   }
  }

  // function validation(obj) {
  //     let isValidate = true;
  //     // console.log(obj)
  //     for (const [key, value] of Object.entries(obj)) {
  //         // console.log(typeof(value))
  //         if (String(value).replaceAll(' ', '') === '') {
  //             //   alert('Please enter ' + key);
  //             setObjofValidation(pv=>({...pv,[key]:'Field Required'}))
  //             isValidate = false
  //           break;
  //         }else{
  //             setObjofValidation(pv=>({...pv,[key]:''}))
  //         }
  //     }
  //     return isValidate
  // }

  function handleOnChange(e) {
    setObjOfData((pv) => ({ ...pv, [e.target.id]: e.target.value }));
  }

  return (
    <div
      className="bg-blue-950 d-flex flex-col"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <Link
        to="/"
        className="m-1 bg-warning p-2 w-fit rounded text-black text-decoration-none"
      >
        Home
      </Link>
      <form
        className="container w-50 py-4 bg-white m-2 rounded px-4"
        onSubmit={handleSubmit}
      >
        <div className="row p-2">
          <label htmlFor="firstname">Firstname</label>
          <input
            required
            type="text"
            defaultValue={objOfData.firstname}
            onChange={(e) => {
              handleOnChange(e);
            }}
            id="firstname"
          />
          <p className="text-danger m-0">{objOfValidation.firstname}</p>
        </div>
        <div className="row p-2">
          <label htmlFor="lastname">Lastname</label>
          <input
            required
            type="text"
            defaultValue={objOfData.lastname}
            onChange={(e) => {
              handleOnChange(e);
            }}
            id="lastname"
          />
          <p className="text-danger m-0">{objOfValidation.lastname}</p>
        </div>
        <div className="row p-2">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            defaultValue={objOfData.email}
            onChange={(e) => {
              handleOnChange(e);
            }}
            id="email"
          />
          <p className="text-danger m-0">{objOfValidation.email}</p>
        </div>
        <div className="row p-2">
          <label htmlFor="phone">Phone</label>
          <input
            required
            type="number"
            defaultValue={objOfData.phone}
            onChange={(e) => {
              handleOnChange(e);
            }}
            id="phone"
          />
          <p className="text-danger m-0">{objOfValidation.phone}</p>
        </div>
        <div className="row p-2">
          <label htmlFor="password">Password</label>
          <div className="password-row p-0">
            <input
              required
              type={isPasswordShow ? "text" : "password"}
              className="pl-3 border-none"
              style={{ width: "95%" }}
              defaultValue={objOfData.password}
              onChange={(e) => {
                handleOnChange(e);
              }}
              id="password"
            />
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsPasswordShow((pv) => !pv);
              }}
            >
              {isPasswordShow ? "😐" : "😑"}
            </span>
          </div>
          <p className="text-danger m-0">{objOfValidation.password}</p>
        </div>
        <div className="row d-flex  p-2 my-3 pb-3">
          <input
            type="submit"
            value={useId ? "Update" : "Submit"}
            className="w-25 m-1 border-none bg-primary"
          />
          <button
            className="btn m-1  w-25 bg-primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
