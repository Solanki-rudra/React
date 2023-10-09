import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table'
import Form from './Form';
import SearchInput from './SearchInput.js'

function ExamPrepCrud() {
  const url = 'http://localhost:3300/comments/';
  const [show, setShow] = useState(false);
  const [arrOfAllData, setArrOfAllData] = useState([]);
  const [forSearchArr, setForSearchArr] = useState([]);
  const [forEditData, setForEditData] = useState(null);
  

  function handleClose() {
    setShow(false)
  }
  async function handleObjFromSubmit (objOfData){
    try{
      let response = await fetch(url,{
        method : 'POST',
        body : JSON.stringify(objOfData),
        headers : {
            'Content-Type': 'application/json',
        }
      })
     }catch(error){
         alert(error);
     }
     getDataApi()
     setShow(false)
  }

  useEffect(() => {
    getDataApi()
  }, []);
  
  async function getDataApi(){
    try{
      let response = await fetch(url)
      let data = await response.json()
      setArrOfAllData(data)
      setForSearchArr(data)
    }
      catch(err){
      alert(err.message)
    }
    }

  async function forDelete(id) {
    try {
      let response = await fetch(url+id,{
        method: 'DELETE',
        headers : {
          'Content-Type': 'application/json',
        }
      })
    } catch (error) {
      alert(error.message)
    }
    getDataApi()
  }

  async function forEdit(id){
    // console.log(id)
    try {
      let response = await fetch(url+id)
      let data = await response.json()
      // console.log(data)
      setForEditData(data)
      setShow(true)
    } catch (error) {
      alert(error.message)
    }
  }

  function handleAdd() {
    setShow(true)
    setForEditData(null)
    // getDataApi()
  }

  async function updatePress(obj) {
    try {
      let response = await fetch(url+obj.id,{
        method:'PATCH',
        body: JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
        }
      })
    } catch (error) {
      alert(error.message)
    }
    getDataApi()
    setShow(false)
  }

  const handleSearch =(value) =>{
    // console.log(forSearchArr)
    let timer;
      clearTimeout(timer)
      timer = setTimeout(() => {
          if(value.trim() !== ''){
              let searchArr= forSearchArr.filter((item)=>item.firstname.toLowerCase().includes(value.trim().toLowerCase().replaceAll(' ','')))
              setArrOfAllData(searchArr)
              // getDataApi()
          }else{
              getDataApi()
          }
      }, 300);
  }
  // const handleSearch =(value) =>{
  //   // console.log(forSearchArr)
  //   let timer;
  //     clearTimeout(timer)
  //     timer = setTimeout(() => {
  //         if(value.trim() !== ''){
  //             let searchArr= arrOfAllData.filter((item)=>item.firstname.toLowerCase().includes(value.trim().toLowerCase().replaceAll(' ','')))
  //             setArrOfAllData(searchArr)
  //             // getDataApi()
  //         }else{
  //             getDataApi()
  //         }
  //     }, 300);
  // }

  // function process(value) {
  //   console.log(value)
  //   if (value.trim() !== '') {
  //     let searchArr = arrOfAllData.filter((item) => item.firstname.toLowerCase().includes(value.toLowerCase().replaceAll(' ','')));
  //     // console.log('if');
  //     setArrOfAllData(searchArr); 
  //   } else {
  //     // console.log('else');
  //     getDataApi(); 
  //   }
  // }
  
  // function debounce(processFunc, delay) {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       processFunc.apply(this, args);
  //     }, delay);
  //   };
  // }
  
  // const handleSearch = debounce(process, 300);

  return (
    <div>
      <Button variant="primary" className='m-3 bg-black border-0 ' onClick={handleAdd}>
        Add Data
      </Button>
     <input type="text" className="pl-2" onChange={(e)=>handleSearch(e.target.value)} placeholder='Search...'/>

      <Modal className='model' show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form submitPress={handleObjFromSubmit} updatePress={updatePress} forEditData={forEditData}/>
        </Modal.Body>
      </Modal>
      <Table arrOfAllData={arrOfAllData} forSearchArr={forSearchArr} forDelete={forDelete} forEdit={forEdit}/>
    </div>
  )
}

export default ExamPrepCrud
