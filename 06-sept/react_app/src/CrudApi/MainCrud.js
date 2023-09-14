import Form from './Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
const url = 'http://localhost:3000/comments/';

function MainCrud() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [arrOfAllData, setArrOfAllData] = useState([]);

async function clickOnSubmit(data){
    try{
       let response = await fetch(url)
       let data = await response.json();
       setArrOfAllData(data)
   }catch(error){
       alert(error);
   }
   setShow(false)
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
    alert(err.message)
  }
  try{
    let response = await fetch(url)
    let data = await response.json()
    setArrOfAllData(data)
  }
  catch(err){
    alert(err.message)
  }
}
  return (
    <> 
      <Button variant="primary" onClick={handleShow}>
        Add Data
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form close={clickOnSubmit} />
        </Modal.Body>
      </Modal>
            <Table arrOfAllData={arrOfAllData} forDelete={handleDelete}/>
    </>
  );
}

export default MainCrud;