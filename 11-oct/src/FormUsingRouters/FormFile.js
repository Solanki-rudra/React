import React,{useState,createContext} from 'react'
import Firstname from './InputFields/Firstname'
import Age from './InputFields/Age'
import Phone from './InputFields/Phone'
import Password from './InputFields/Password'
import Email from  './InputFields/Email'
import {useNavigate,Link } from 'react-router-dom'

const url= 'http://localhost:3100/comments/'

const mainContexApi = createContext()
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
        return <Firstname/>
      case 1:
        return <Age />
      case 2:
        return <Phone  />
      case 3:
        return <Email   />
      case 4:
        return <Password  />
    }
  }

  async function handleSubmit (objOfData) {
    // if (pageNo==4) {
      // console.log(objOfData)
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
    // }else{
    //   setPageNo(pv => pv+1)
    // }
  }
  return (
    <mainContexApi.Provider value={{pageNo,setPageNo,objOfData,setObjOfData,handleSubmit}}>

    <div>
    <Link to='/' className='btn bg-warning my-3'>Home</Link>
      <div className="container my-5 w-25 bg-success p-3 rounded">
        <div className="row">
          <h4>Page {pageNo+1}/5</h4>
          <Inputs />
        </div>
        {/* <div className="row ">
          <button className="btn bg-primary" disabled={pageNo==0} onClick={()=>{setPageNo(pv=>pv-1)}}>Prev</button>
          <button className="btn bg-primary" onClick={handleSubmit}>{pageNo==4?'Submit':'Next'}</button>
        </div> */}
      </div>
    </div>

    </mainContexApi.Provider>
  )
}

export {mainContexApi}
export default FormFile
