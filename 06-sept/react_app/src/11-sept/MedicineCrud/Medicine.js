import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form1 from './Form1'
import Popup2 from './Popup2';
import Table1 from './Table1';

function Example() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  let [arrOfMedicinData, setArrOfMedicineData] = useState([]);
  let [forEdt_data, setForEdt_data] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const remover = (ind) => {
    arrOfMedicinData = arrOfMedicinData.filter((item,index) => index != ind)
    setArrOfMedicineData(arrOfMedicinData)
  }
  const editer = (ind) => {
    setShow(true)
    setUpdateIndex(ind)
    setForEdt_data(arrOfMedicinData.find((item,index) => index == ind))
  }
  const handleData =(data) => {
    if (forEdt_data) {
      arrOfMedicinData[updateIndex] = data
      setArrOfMedicineData(arrOfMedicinData)
      setShow(false)
    }else{
      if(isDuplicate){
        alert('Medicine already exists')
        setShow(true)
      }else if(data.qty < 1 ){
        alert('Quantity is not valid')
        setShow(true)
      }else{
        setArrOfMedicineData([...arrOfMedicinData,data])
        setShow(false)
      }
        // setArrOfMedicineData([...arrOfMedicinData,data])
        // setShow(false)
    }
  }

  const isDuplicateMedicine = (medicine) =>{
    let a = arrOfMedicinData.some((item) => item.medicine == medicine)
    console.log(a)
    setIsDuplicate(a)
  }

  const handleClose = () => {
    setShow(false);
    setShow2(false);
  }
  const handleShow = () => {
    setShow(true)
    setForEdt_data(null)
  };
  const handleShow_add_record =() => {
    setShow2(true)
  }

  return (
    <>
      <Button variant="primary" className='m-3' onClick={handleShow}>
        Add Medicine
      </Button>
      <Button variant="primary" className='m-3' onClick={handleShow_add_record}>
        Add Record
      </Button>

      <Table1 arr_data = {arrOfMedicinData} edit_index={editer} delete_index={remover}/>
      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Medicine Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form1 dataOfObject={handleData} forEdt_data = {forEdt_data} forDuplicateMedicine={isDuplicateMedicine}/>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Popup2 />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;