import React, { useState,useContext } from 'react'
import { 
    Link,
    useNavigate,
    useLocation
 } from "react-router-dom";
// import {editObj} from './LandingPage.js'

function Form() {
    const navigate = useNavigate()
    const location = useLocation()
    // const objForEdit = useContext(editObj);
    const objForEdit = location.state
    const url = 'http://localhost:3500/comments/'
    const [objOfData, setObjOfData] = useState(objForEdit || {firstname:'',lastname:'',email:'',phone:'',password:''});
    console.log(objForEdit)
   
    async function handleSubmit(e) {
        e.preventDefault()
        // if (validation(objOfData)) {
            
        
        if(!objForEdit){
            console.log('post')
            console.log(objOfData)
            try{
                let response = await fetch(url,{
                  method : 'POST',
                  body : JSON.stringify(objOfData),
                  headers : {
                      'Content-Type': 'application/json',
                  }
                })
           }catch(error){
               alert(error.message);
           }

        }else{
            console.log('patch')
            try{
                let response = await fetch(url+objForEdit.id,{
                  method : 'PATCH',
                  body : JSON.stringify(objOfData),
                  headers : {
                      'Content-Type': 'application/json',
                  }
                })
           }catch(error){
               alert(error.message);
           }
        }
        navigate('/')

    // }
    }

    function validation(obj) {
        let isValidate = true;

        for (const [key, value] of Object.entries(obj)) {
            if (value.replaceAll(' ', '') === '') {
                  alert('Please enter ' + key);
                  isValidate = false
              break; 
            }
        }

        return isValidate
    }

    function handleOnChange(e) {
        setObjOfData(pv=>(
            {...pv,[e.target.id]:e.target.value}
        ))
    }

  return (
    <div className='container bg-white m-2'>
        <Link to='/'>Home</Link>
      <form onSubmit={handleSubmit}>
        <div className='row p-2'>
            <label htmlFor='firstname'>Firstname</label>
            <input type="text" defaultValue={objOfData.firstname} onChange={(e)=>{handleOnChange(e)}} id='firstname'/>
        </div>
        <div className='row p-2'>
            <label htmlFor='lastname'>Lastname</label>
            <input type="text" defaultValue={objOfData.lastname} onChange={(e)=>{handleOnChange(e)}}  id='lastname'/>
        </div>
        <div className='row p-2'>
            <label htmlFor='email'>Email</label>
            <input type="text" defaultValue={objOfData.email} onChange={(e)=>{handleOnChange(e)}}  id='email'/>
        </div>
        <div className='row p-2'>
            <label htmlFor='phone'>Phone</label>
            <input type="text" defaultValue={objOfData.phone} onChange={(e)=>{handleOnChange(e)}} id='phone'/>
        </div>
        <div className='row p-2'>
            <label htmlFor='password'>Password</label>
            <input type="text" defaultValue={objOfData.password} onChange={(e)=>{handleOnChange(e)}} id='password'/>
        </div>
        <div className='row p-2 my-3 pb-3'>
            <input type="submit" value='submit' className='w-50 bg-primary' />
        </div>
      </form>
    </div>
  )
}

export default Form
