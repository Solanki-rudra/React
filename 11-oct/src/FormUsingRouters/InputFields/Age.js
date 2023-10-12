import React,{useContext,useState} from 'react'
import {mainContexApi} from '../FormFile.js'

function Age() {
  const {pageNo,setPageNo,objOfData,setObjOfData} = useContext(mainContexApi)
  const [age, setAge] = useState(objOfData.age);
  const [age_validation, setAge_validation] = useState('');

  function handelNext() {
    setAge_validation('');
    if (age == "") {
      setAge_validation('Field Required');
    }else{
      setObjOfData(pv=>({...pv,age:age}))
      setPageNo(2)
    }
  }
  function handlePrev() {
    setObjOfData(pv=>({...pv,age:age}))
    setPageNo(0)
  }
  return (
    <div>
          <div>
      <label htmlFor="age">Age :</label>
    <br />
      <input type="number" defaultValue={age} className='rounded border-0 p-1 my-1' onChange={(e)=>{setAge(e.target.value)}} id='age' required/>
      <p className='text-danger'>{age_validation}</p>
    </div>
          <button className="btn bg-warning mx-1"onClick={handlePrev}>Prev</button>
          <button className="btn bg-warning mx-1" onClick={handelNext}>Next</button>
    </div>
  )
}
export default Age
