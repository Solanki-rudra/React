import React from 'react'

function Password({objOfData,setObjOfData}) {
  return (
    <div>
    <label htmlFor="password">Password :</label>
    <input type="text" defaultValue={objOfData.password} onBlur={(e)=>{setObjOfData(pv=>({...pv,password:e.target.value}))}} id='password' required/>
    </div>
  )
}

export default Password
