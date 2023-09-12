import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form1 from './Form1'
import Table1 from './Table1';

function Example() {
  const [show, setShow] = useState(false);
  const [arrOfData, setArrOfData] = useState([]);
  let forEdt_data = null
  // const [obj, setObj] = useState(null);
  const handleData =(data) => {
    setArrOfData([...arrOfData,data])
    // setShow(false)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditData = (Edt_data) => {
       forEdt_data = Edt_data
       setShow(true)
  }
  return (
    <>
      <Button variant="primary" className='m-3' onClick={handleShow}>
        Add Medicine
      </Button>
      <Table1 arr_data = {arrOfData} dataForEdit={handleEditData} />
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