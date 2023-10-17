import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    // const [loginData, setLoginData] = useState({username:'',password:'',isLogin:false});
    // const [isLogin, setIsLogin] = useState(false)
    function handleSubmit() {
        localStorage.setItem('login',true)
        navigate('/')
    }


    // function handleOnChange(e) {
    //     setLoginData(pv=>({...pv,[e.target.id]:e.target.value}))
    // }
  return (
<>
<Link className='m-1 bg-black p-2' to='/'>Home</Link>
    <div className='container'>
      <form className='w-75 bg-success p-5 rounded' onSubmit={handleSubmit}>
        <div className="row">
            <label htmlFor="usesrname">Username : </label>
            <input type="text" id='username' required/>
        </div>
        <div className="row">
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' required/>
        </div>
        <div className="col">
            <button className="btn bg-warning">Login</button>
        </div>
      </form>
    </div>
</>
  )
}

export default Login
