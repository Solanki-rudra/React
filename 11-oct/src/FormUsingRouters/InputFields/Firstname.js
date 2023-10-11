import React from 'react'

function Firstname({objOfData,setObjOfData}) {
  return (
    <div>
      <label htmlFor="firstname">Firstname :</label>
      <input type="text" defaultValue={objOfData.firstname} onBlur={(e)=>{setObjOfData({...objOfData,firstname:e.target.value})}} id='firstname' required/>
    </div>
  )
}

export default Firstname



