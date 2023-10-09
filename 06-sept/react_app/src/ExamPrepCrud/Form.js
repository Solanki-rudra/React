import React,{useState} from 'react'


function Form({submitPress,forEditData,updatePress}) {
    // console.log('object')
    const [hideShow, setHideShow] = useState({isShow:false,face:'😑'});
    const [objOfData, setObjOfData] = useState(forEditData || {firstname:'',lastname:'',email:'',phone:'',password:'' });

    function handleHideShow() {
        hideShow.isShow?setHideShow({isShow:false,face:'😑'}):setHideShow({isShow:true,face:'😐'})
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(validation(objOfData)){
            !forEditData ? submitPress(objOfData) : updatePress(objOfData)
        }
    }
    function onChangeFunc(id,value) {
        setObjOfData(pv => ({...pv,[id]:value}))
    }
    function validation (obj){
        // if(objOfData.firstname.replaceAll(' ','') === ''){
        //     alert('Plz enter firstname')
        // }
        // if(objOfData.lastname.replaceAll(' ','') === ''){
        //     alert('Plz enter lastname')
        // }
        let isValidate = true;

        // Object.entries(obj).forEach(item => {
        //     if(item[1].replaceAll(' ','') === ''){
        //         alert('plz enter '+item[0])
        //         isValidate = false;
        //     }
        // })

        for (const [key, value] of Object.entries(obj)) {
            if (value.replaceAll(' ', '') === '') {
                  alert('Please enter ' + key);
                  isValidate = false
              break; 
            }
        }

        return isValidate
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row m-2'>
                <label htmlFor='firstName'>First name :</label>
                <input type="text" defaultValue={objOfData.firstname} onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='firstname' />
            </div>
            <div className='row m-2'>
                <label htmlFor='lastName'>Last name :</label>
                <input type="text" defaultValue={objOfData.lastname} onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='lastname' />
            </div>
            <div className='row m-2'>
                <label htmlFor='email'>Email :</label>
                <input type="email" defaultValue={objOfData.email} onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='email'/>
            </div>
            <div className='row m-2'>
                <label htmlFor='phone'>Phone :</label>
                <input type="number" defaultValue={objOfData.phone} onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  id='phone' />
            </div>
            <div className='row m-2'>
                <label htmlFor='password'>Password :</label>
                <div className="password-row p-0">
                    <input type={hideShow.isShow ? 'text' : 'password'} defaultValue={objOfData.password} onChange={(e) => onChangeFunc(e.target.id,e.target.value)}  className='col-11 border-0 pl-3' id='password'/>
                    <span className='col-1 cursor-pointer p-0' onClick={handleHideShow}>{hideShow.face}</span>
                </div>
            </div>
            <input type="submit" className='btn bg-primary text-white m-2' value={forEditData?'Update':'Add'} />
        </form>
    </div>
  )
}

export default Form
