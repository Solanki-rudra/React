import React from 'react'
function Age({objOfData,setObjOfData}) {
  return (
    <div>
      <label htmlFor="age">Age :</label>
      <input type="number" defaultValue={objOfData.age} onBlur={(e)=>{setObjOfData(pv=>({...pv,age:e.target.value}))}} id='age' required/>
    </div>
  )
}
export default Age
