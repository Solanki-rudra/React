import React from 'react'

function Phone({objOfData,setObjOfData}) {
  return (
    <div>
    <label htmlFor="phone">Phone :</label>
    <input type="number" defaultValue={objOfData.phone} onBlur={(e)=>{setObjOfData(pv=>({...pv,phone:e.target.value}))}} id='phone' required/>
    </div>
  )
}

export default Phone
