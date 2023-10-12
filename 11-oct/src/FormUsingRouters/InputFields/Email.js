import React,{useContext,useState} from 'react'
import {mainContexApi} from '../FormFile.js'

function Email( ) {
  const {pageNo,setPageNo,objOfData,setObjOfData} = useContext(mainContexApi)
  const [email, setEmail] = useState(objOfData.email);
  const [email_validation, setEmail_validation] = useState('');

  function handelNext() {
    setEmail_validation('');
    if (email == "") {
      setEmail_validation('Field Required');
    }else{
      setObjOfData(pv=>({...pv,email:email}))
      setPageNo(4)
    }
  }
  function handlePrev() {
    setObjOfData(pv=>({...pv,email:email}))
    setPageNo(2)
  }

  return (
    <div>
          <div>
    <label htmlFor="email">Email :</label>
    <br />
    <input type="email" defaultValue={email} className='rounded border-0 p-1 my-1' onChange={(e)=>{setEmail(e.target.value)}} id='email' required/>
    <p className='text-danger'>{email_validation}</p>

    </div>
          <button className="btn bg-warning mx-1"onClick={handlePrev}>Prev</button>
          <button className="btn bg-warning mx-1" onClick={handelNext}>Next</button>
    </div>
  )
}

export default Email
