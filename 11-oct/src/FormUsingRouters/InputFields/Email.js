import React from 'react'

function Email({objOfData,setObjOfData}) {
  return (
    <div>
    <label htmlFor="email">Email :</label>
    <input type="email" defaultValue={objOfData.email} onBlur={(e)=>{setObjOfData(pv=>({...pv,email:e.target.value}))}} id='email' required/>
    </div>
  )
}

export default Email
