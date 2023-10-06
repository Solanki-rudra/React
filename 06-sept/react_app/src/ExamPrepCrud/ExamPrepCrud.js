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
  const [searchedArr, setSearchedArr] = useState([]);
  

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
        let data = await response.json()
        setArrOfAllData((pv)=>[...pv,data])
     }catch(error){
         alert(error);
     }
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
    }
      catch(err){
      alert(err.message)
    }
    }

  let timer;
  const handleSearch =(value) =>{
      clearTimeout(timer)
      timer = setTimeout(() => {
          if(value.trim() !== ''){
              let searchArr= arrOfAllData.filter((item)=>item.firstname.includes(value.trim()))
              console.log(searchArr)
              setSearchedArr(searchArr)
          }else{
              setSearchedArr([])
          }
      }, 500);
  }

  return (
    <div>
      <Button variant="primary" className='m-3 bg-black border-0 ' onClick={()=>{setShow(true)}}>
        Add Data
      </Button>

      <div className='w-fit text-start'>
            <input type="text" onKeyUp={(e)=>handleSearch(e.target.value)}/>
            <SearchInput searchedArr={searchedArr} />
      </div>

      <Modal className='model' show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form submitPress={handleObjFromSubmit}/>
        </Modal.Body>
      </Modal>
      <Table arrOfAllData={arrOfAllData} />
    </div>
  )
}

export default ExamPrepCrud
