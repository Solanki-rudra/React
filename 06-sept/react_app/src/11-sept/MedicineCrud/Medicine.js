import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form1 from './Form1'
import Table1 from './Table1';

function Example() {
  const [show, setShow] = useState(false);
  let [arrOfMedicinData, setArrOfMedicineData] = useState([]);
  // let forEdt_data = null
  let [forEdt_data, setForEdt_data] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(null);

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
      // console.log('before' + forEdt_data.medicine)
      // forEdt_data = data
      arrOfMedicinData[updateIndex] = data
      setArrOfMedicineData(arrOfMedicinData)
      // console.log(arrOfMedicinData)
      // console.log('after' + forEdt_data.medicine)
    }else{
      setArrOfMedicineData([...arrOfMedicinData,data])
    }
    setShow(false)
  }

  const handleClose = () => setShow(false);
  
  const handleShow = () => {
    setShow(true)
    setForEdt_data(null)
  };

  return (
    <>
      <Button variant="primary" className='m-3' onClick={handleShow}>
        Add Medicine
      </Button>

      <Table1 arr_data = {arrOfMedicinData} edit_index={editer} delete_index={remover}/>
      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Medicine Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form1 dataOfObject={handleData} forEdt_data = {forEdt_data} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;