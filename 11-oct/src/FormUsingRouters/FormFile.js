import React,{useState} from 'react'
import Firstname from './InputFields/Firstname'
import Age from './InputFields/Age'
import Phone from './InputFields/Phone'
import Password from './InputFields/Password'
import Email from  './InputFields/Email'
import {useNavigate } from 'react-router'

const url= 'http://localhost:3100/comments/'

function FormFile() {
  console.log('df')
  const navigate = useNavigate()
  const [pageNo, setPageNo] = useState(0);
  const [objOfData, setObjOfData] = useState({
    firstname:'',
    age:'',
    phone:'',
    email:'',
    password:''
  });

  function Inputs() {
    switch (pageNo) {
      case 0:
        return <Firstname objOfData={objOfData} setObjOfData={setObjOfData}  />
      case 1:
        return <Age objOfData={objOfData} setObjOfData={setObjOfData}  />
      case 2:
        return <Phone objOfData={objOfData} setObjOfData={setObjOfData}  />
      case 3:
        return <Email objOfData={objOfData} setObjOfData={setObjOfData}  />
      case 4:
        return <Password objOfData={objOfData} setObjOfData={setObjOfData}  />
    }
  }

  async function handleSubmit () {
    if (pageNo==4) {
      try {
        let response = await fetch(url,{
          method : 'POST',
          body : JSON.stringify(objOfData),
          headers : {
            "Content-Type": "application/json"
          }
        })
        navigate('/')
      } catch (error) {
        alert(error.message)
      }
    }else{
      setPageNo(pv => pv+1)
    }
  }
  return (
    <div>
      <div className="container ">
        <div className="row">
          <Inputs />
          <h4>Page {pageNo+1}/5</h4>
        </div>
        <div className="row ">
          <button className="btn bg-primary" disabled={pageNo==0} onClick={()=>{setPageNo(pv=>pv-1)}}>Prev</button>
          <button className="btn bg-primary" onClick={handleSubmit}>{pageNo==4?'Submit':'Next'}</button>
        </div>
      </div>
    </div>
  )
}

export default FormFile
