import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userData, setUserData] = useState({username:'',password:''});
    const navigate = useNavigate()

    function handleOnChange(e) {
        setUserData(pv=>({...pv,[e.target.id]:e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(userData)
        localStorage.setItem('userData', JSON.stringify(userData))
        navigate('/')
    }

  return (
    <div className='d-flex justify-center mt-2'>
        <form className='bg-white w-fit p-3 rounded' onSubmit={handleSubmit}>
            <input type="text" required placeholder='Username' id='username' onChange={(e)=>handleOnChange(e)}/>
            <br/>
            <br/>
            <input type="text" required placeholder='Password' id='password' onChange={(e)=>handleOnChange(e)} />
            <br/>
            <br/>
            <input type='submit' value='Submit' className="btn bg-primary" />
        </form>
    </div>
  )
}

export default Login
