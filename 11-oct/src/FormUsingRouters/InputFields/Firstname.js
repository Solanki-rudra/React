import React,{useContext, useState} from 'react'
import {mainContexApi} from '../FormFile.js'

function Firstname() {
  const {pageNo,setPageNo,objOfData,setObjOfData} = useContext(mainContexApi)
  const [firstname, seTfirstname] = useState(objOfData.firstname);
  const [firstname_validation, setFirstname_validation] = useState('');
  function handelNext() {
    setFirstname_validation('');
    if (firstname == "") {
      setFirstname_validation('Field Required');
    }else{
      setObjOfData(pv=>({...pv,firstname:firstname}))
      setPageNo(1)
    }
  }
  return (
      <div>
      <div>
      <label htmlFor="firstname">Firstname :</label>
      <br />
      <input type="text" className='rounded border-0 p-1 my-1' defaultValue={firstname} onChange={(e)=>{seTfirstname(e.target.value)}} id='firstname' required/>
      <p className='text-danger'>{firstname_validation}</p>
    </div>
          <button className="btn bg-warning" onClick={handelNext}>Next</button>
      </div>
  )
}

export default Firstname



