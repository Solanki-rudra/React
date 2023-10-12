import React,{useContext,useState} from 'react'
import {mainContexApi} from '../FormFile.js'

function Password() {
  const {pageNo,setPageNo,objOfData,setObjOfData,handleSubmit} = useContext(mainContexApi)
  const [password, setPassword] = useState(objOfData.password);
  const [password_validation, setPassword_validation] = useState('');

  function isReadyForSubmit() {
    setPassword_validation('');
    if (password == "") {
      setPassword_validation('Field Required');
    }else{
      // setObjOfData(pv=>({...pv,password:password}))
      handleSubmit({...objOfData,password:password})
    }
  }
  function handlePrev() {
    setObjOfData(pv=>({...pv,password:password}))
    setPageNo(3)
  }


  return (
    <div>
          <div>
    <label htmlFor="password">Password :</label>
    <br />
    <input type="text" defaultValue={password} className='rounded border-0 p-1 my-1' onChange={(e)=>{setPassword(e.target.value)}} id='password' required/>
    <p className='text-danger'>{password_validation}</p>
    </div>
          <button className="btn bg-warning mx-1"onClick={handlePrev}>Prev</button>
          <button className="btn bg-warning mx-1" onClick={isReadyForSubmit}>Submit</button>
    </div>
  )
}

export default Password
