import React,{useState} from 'react'
const passwardRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;


function Form({submitPress , forEditObj , updatePress}) {
    const [objOfData, setObjOfData] = useState(forEditObj || {firstname:'',lastname:'',email:'',phone:'',password:'' });
    const [objOfValidation, setObjOfValidation] = useState({firstname:'',lastname:'',email:'',phone:'',password:''});

    async function handleSubmit (e) {
        e.preventDefault()
        if(validationOnClick() === 5){
            forEditObj ? updatePress(objOfData) : submitPress(objOfData)
        }
    }

    function validationOnClick() {
        setObjOfValidation({firstname:'',lastname:'',email:'',phone:'',password:''})
        let howManyValid = 0;
        !name_validation(objOfData.firstname,'firstname') ? howManyValid+=1 : howManyValid+=0
        !name_validation(objOfData.lastname,'lastname') ? howManyValid+=1 : howManyValid+=0
        !phone_validation(objOfData.phone) ? howManyValid+=1 : howManyValid+=0
        !password_validation(objOfData.password) ? howManyValid+=1 : howManyValid+=0
        !email_validation(objOfData.email) ? howManyValid+=1 : howManyValid+=0
        return howManyValid
    }

    function all_validation(id,value) {
        switch (id) {
            case 'firstname': name_validation(value,id)
                break;
            case 'lastname': name_validation(value,id)
                break;
            case 'email': email_validation(value)
                break;
            case 'phone': phone_validation(value)
                break;
            case 'password': password_validation(value)
                break;
        }
    }

    function name_validation(value,id) {
        setObjOfValidation(pv => ({...pv,[id]:''}))
        if(!value.trim() || value.trim().replaceAll(' ','').length < 3) {
            setObjOfValidation((pv) => ({...pv,[id]:'Enter valid '+id}))
            return true
        }
        return false
    }

    function phone_validation(value) {
        setObjOfValidation((pv) => ({...pv,phone:''}))
        let isFirstLaterValid = [9,8,7,6].some(item => item == value.at(0))
        if(!(value.length == 10)){
            setObjOfValidation((pv) => ({...pv,phone:'phone number have 10-letters'}))
            return true
        }
        if (!isFirstLaterValid) {
            setObjOfValidation((pv) => ({...pv,phone:'phone number always start with - 6,7,8,9'}))
            return true
        }
        return false
    }

    function password_validation(value){
        setObjOfValidation((pv) => ({...pv,password:''}))
        if(!(value.replaceAll(' ','').length >= 8)){
            setObjOfValidation((pv) => ({...pv,password:'Enter atleast 8 letter'}))
            return true
        }
        if(!passwardRegex.test(value)){
            setObjOfValidation((pv) => ({...pv,password:'Use lowercase, uppercase, numbers and special characters'}))
            return true
        }
        return false
    }

    function email_validation(value){
        setObjOfValidation((pv) => ({...pv,email:''}))
        if(!emailRegex.test(value)){
            setObjOfValidation((pv) => ({...pv,email:'Enter valid email'}))
            return true
        }
        return false
    }

    function onChangeFunc(id,value) {
        setObjOfData(pv => ({...pv,[id]:value}))
        all_validation(id,value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row m-2'>
                <label htmlFor='firstName'>First name :</label>
                <input type="text" defaultValue={objOfData?(objOfData.firstname):''} onChange={(e) => onChangeFunc(e.target.id,e.target.value)} id='firstname' />
                <p>{objOfValidation.firstname}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='lastName'>Last name :</label>
                <input type="text" defaultValue={objOfData?(objOfData.lastname):''} onChange={(e) => onChangeFunc(e.target.id,e.target.value)} id='lastname' />
                <p>{objOfValidation.lastname}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='email'>Email :</label>
                <input type="email" defaultValue={objOfData?(objOfData.email):''} onChange={(e) => onChangeFunc(e.target.id,e.target.value)} id='email' />
                <p>{objOfValidation.email}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='phone'>Phone :</label>
                <input type="number" defaultValue={objOfData?(objOfData.phone):''} onChange={(e) => onChangeFunc(e.target.id,e.target.value)} id='phone' />
                <p>{objOfValidation.phone}</p>
            </div>
            <div className='row m-2'>
                <label htmlFor='password'>Password :</label>
                <input type="password" defaultValue={objOfData?(objOfData.password):''} onChange={(e) => onChangeFunc(e.target.id,e.target.value)} id='password' />
                <p>{objOfValidation.password}</p>
            </div>
            <input type="submit" className='btn bg-primary text-white m-2' value = {forEditObj ? 'Update': 'Submit'} />
        </form>
    </div>
  )
}

export default Form
