import React,{useContext,useState} from 'react'
import {mainContexApi} from '../FormFile.js'

function Phone( ) {
  const {pageNo,setPageNo,objOfData,setObjOfData} = useContext(mainContexApi)
  const [phone, setPhone] = useState(objOfData.phone);
  const [phone_validation, setPhone_validation] = useState('');

  function handelNext() {
    setPhone_validation('');
    if (phone == "") {
      setPhone_validation('Field Required');
    }else{
      setObjOfData(pv=>({...pv,phone:phone}))
      setPageNo(3)
    }
  }
  function handlePrev() {
    setObjOfData(pv=>({...pv,phone:phone}))
    setPageNo(1)
  }

  return (
    <div>
          <div>
    <label htmlFor="phone">Phone :</label>
    <br />
    <input type="number" defaultValue={phone} className='rounded border-0 p-1 my-1' onChange={(e)=>{setPhone(e.target.value)}} id='phone' required/>
    <p className='text-danger'>{phone_validation}</p>

    </div>
          <button className="btn bg-warning mx-1"onClick={handlePrev}>Prev</button>
          <button className="btn bg-warning mx-1" onClick={handelNext}>Next</button>
    </div>
  )
}

export default Phone
