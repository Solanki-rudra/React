import React,{useState} from 'react'
const url = 'http://localhost:3331/comments/'
const letterRegex = /.*[a-zA-Z].*/
const passwardRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/

function Form({submitPress , forEditObj}) {
    const [objOfData, setObjOfData] = useState(forEditObj || {firstname:'',lastname:'',email:'',phone:'',password:'' });
    const [objOfValidation, setObjOfValidation] = useState({firstname:'',lastname:'',email:'',phone:'',password:''});

    async function handleSubmit (e) {
        e.preventDefault()
        if (false) {
        }
        else{
             submitPress(objOfData)
        }
    }

    function all_validation() {
        setObjOfValidation({firstname:'',lastname:'',email:'',phone:'',password:''})
        if (!objOfData.firstname.trim() || !letterRegex.test(objOfData.firstname)) {
            setObjOfValidation((pv) => ({...pv,firstname:'Enter valid firstname'}))
            return true
        }
        if(!objOfData.lastname.trim()){
            setObjOfValidation((pv) => ({...pv,lastname:'Enter valid lastname'}))
            return true
        }
        if(phone_validation()) {
            return true
        }
        if(password_validation()){
            return true
        }
        return false
    }

    function phone_validation() {
        setObjOfValidation((pv) => ({...pv,phone:''}))
        let isFirstLaterValid = [9,8,7,6].some(item => item == objOfData.phone.at(0))
        if(!(objOfData.phone.length == 10)){
            setObjOfValidation((pv) => ({...pv,phone:'phone number have 10-letters'}))
            return true
        }
        if (!isFirstLaterValid) {
            setObjOfValidation((pv) => ({...pv,phone:'phone number shoudn\'t start with - 6,7,8,9'}))
            return true
        }
        return false
    }

    function password_validation(){
        setObjOfValidation((pv) => ({...pv,password:''}))
        if(!(objOfData.password.length >= 8)){
            setObjOfValidation((pv) => ({...pv,password:'Enter atleast 8 letter'}))
            return true
        }
        if(!passwardRegex.test(objOfData.password)){
            setObjOfValidation((pv) => ({...pv,password:'Password should have atleast one letter(a-z and A-Z), number and special characters'}))
            return true
        }
        return false
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row m-2'>
                <label htmlFor='firstName'>First name :</label>
                <input type="text" defaultValue={objOfData?(objOfData.firstname):''} onChange={(e) => { setObjOfData((pv) => ({ ...pv, firstname: e.target.value }))}} id='firstName' required/>
                <p>{objOfValidation.firstname}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='lastName'>Last name :</label>
                <input type="text" onChange={(e)=>{setObjOfData(pv => ({...pv,lastname:e.target.value}))}} id='lastName' required/>
                <p>{objOfValidation.lastname}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='email'>Email :</label>
                <input type="email" onChange={(e)=>{setObjOfData(pv => ({...pv,email:e.target.value}))}} id='email' required/>
                <p>{objOfValidation.email}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='phone'>Phone :</label>
                <input type="number" onChange={(e)=>{setObjOfData( pv => ({...pv,phone:e.target.value}))}} id='phone' required/>
                <p>{objOfValidation.phone}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='password'>Password :</label>
                <input type="password" onChange={(e)=>{setObjOfData(pv => ({...pv,password:e.target.value}))}} id='password' required/>
                <p>{objOfValidation.password}</p>
            </div>
            <input type="submit" className='btn bg-primary text-white m-2' value = 'Submit' />
        </form>
    </div>
  )
}

export default Form
