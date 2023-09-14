import React,{useState} from 'react'
const url = 'http://localhost:3000/comments/'

function Form(props) {
    const [objOfData, setObjOfData] = useState({firstname:'',lastname:'',email:'',phone:'',password:'' });
    // const [arrOfData, setArrOfData] = useState([]);
    async function handleSubmit (e) {
        e.preventDefault()
        try {
            let response = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(objOfData),
                headers : {
                    'Content-Type':'application/json'
                }
            })
            // let data = await response.json();
            // console.log(data)
        } catch (error) {
            alert('Invalid API');
        }

        props.close(true)
        // try{
        //     let response = await fetch(url)
        //     let data = await response.json();
        //     setArrOfData(data)
        //     props.arrOfData(arrOfData)
        // }catch(error){
        //     alert(error);
        // }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row m-2'>
                <label htmlFor='firstName'>First name :</label>
                <input type="text" onChange={(e)=>{setObjOfData({...objOfData,firstname:e.target.value})}} id='firstName'/>
            </div>
            <div className='row m-2'>
                <label htmlFor='lastName'>Last name :</label>
                <input type="text" onChange={(e)=>{setObjOfData({...objOfData,lastname:e.target.value})}} id='lastName'/>
            </div>
            <div className='row m-2'>
                <label htmlFor='email'>Email :</label>
                <input type="email" onChange={(e)=>{setObjOfData({...objOfData,email:e.target.value})}} id='email'/>
            </div>
            <div className='row m-2'>
                <label htmlFor='phone'>Phone :</label>
                <input type="number" onChange={(e)=>{setObjOfData({...objOfData,phone:e.target.value})}} id='phone'/>
            </div>
            <div className='row m-2'>
                <label htmlFor='password'>Password :</label>
                <input type="password" onChange={(e)=>{setObjOfData({...objOfData,password:e.target.value})}} id='password'/>
            </div>
            <input type="submit" className='btn bg-primary text-white m-2' value = 'Submit' />
        </form>
    </div>
  )
}

export default Form
