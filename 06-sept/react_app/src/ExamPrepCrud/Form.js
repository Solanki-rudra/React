import React,{useState} from 'react'


function Form({submitPress}) {
    const [hideShow, setHideShow] = useState({isShow:false,face:'😑'});
    const [objOfData, setObjOfData] = useState({firstname:'',lastname:'',email:'',phone:'',password:'' });
    function handleHideShow() {
        hideShow.isShow?setHideShow({isShow:false,face:'😑'}):setHideShow({isShow:true,face:'😐'})
    }
    function handleSubmit(e) {
        e.preventDefault()
        submitPress(objOfData)
    }
    function onChangeFunc(id,value) {
        setObjOfData(pv => ({...pv,[id]:value}))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row m-2'>
                <label htmlFor='firstName'>First name :</label>
                <input type="text" onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='firstname' />
            </div>
            <div className='row m-2'>
                <label htmlFor='lastName'>Last name :</label>
                <input type="text" onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='lastname' />
            </div>
            <div className='row m-2'>
                <label htmlFor='email'>Email :</label>
                <input type="email" onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='email'/>
            </div>
            <div className='row m-2'>
                <label htmlFor='phone'>Phone :</label>
                <input type="number" onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='phone' />
            </div>
            <div className='row m-2'>
                <label htmlFor='password'>Password :</label>
                <div className="password-row p-0">
                    <input type={hideShow.isShow ? 'text' : 'password'} onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  className='col-11 border-0 pl-3' id='password'/>
                    <span className='col-1 cursor-pointer p-0' onClick={handleHideShow}>{hideShow.face}</span>
                </div>
            </div>
            <input type="submit" className='btn bg-primary text-white m-2' value='Submit' />
        </form>
    </div>
  )
}

export default Form
