// cmd --> npx json-server -p 3331 -w db.json
import Form from './Form';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
const url = 'http://localhost:3331/comments/';

function MainCrud() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isDelete, setIsdelete] = useState(null);
  const handleClose = () => {
    setShow(false)
    setShow2(false)
  };
  const handleShow = () => {
    setShow(true)
    setForEditObj(null)
  };
  const [arrOfAllData, setArrOfAllData] = useState([]);
  const [forEditObj, setForEditObj] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setArrOfAllData(data)
        } catch (error) {
          alert(error);
        }
      };
       fetchData();
    }, []);

async function clickOnSubmit(objOfData){
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

async function clickOnUpdate(objOfData){
  try{
    let response = await fetch(url+(objOfData.id),{
      method : 'PATCH',
      body : JSON.stringify(objOfData),
      headers : {
          'Content-Type': 'application/json',
      }
    })
  }catch(error){
      alert(error);
  }
  try{
    let response = await fetch(url)
    let data = await response.json()
    setArrOfAllData(data)
  }
    catch(err){
    alert(err.message)
  }
   setShow(false)
}

function handleDeleteConfirmation (id) {
  setShow2(true)
  setIsdelete(id)
}

async function handleDelete(id){
    try{
      
      let a = await fetch(url+id,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
         }
      })
    }catch(err){
      alert(err)
    }
    try{
      let response = await fetch(url)
      let data = await response.json()
      setArrOfAllData(data)
    }
    catch(err){
      alert(err)
    }
    setShow2(false)
    setIsdelete(null)
   }


async function handleEdit(id){
  try{
    let a = await fetch(url+id)
    let data = await a.json()
    setForEditObj(data)
    setShow(true)
  }catch(err){
    alert(err.message)
  }
}
  return ( 
    <> 
      <Button variant="primary" className='m-3 bg-black border-0 ' onClick={handleShow}>
        Add Data
      </Button>
      <Modal className='model' show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form submitPress={clickOnSubmit} updatePress={clickOnUpdate} forEditObj={forEditObj}/>
        </Modal.Body>
      </Modal>

      <Modal className='model' show={show2} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure for Delete ?</h5>
          <button className='btn bg-danger text-white' onClick={() => handleDelete(isDelete)}>Delete</button>
          <button className='btn bg-primary text-white' onClick={handleClose}>cancel</button>
        </Modal.Body>
      </Modal>
      <Table arrOfAllData={arrOfAllData} forDelete={handleDeleteConfirmation} forEdit={handleEdit}/>
    </>
  );
}

export default MainCrud;