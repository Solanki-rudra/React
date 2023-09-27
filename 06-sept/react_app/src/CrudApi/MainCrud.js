// cmd --> npx json-server -p 3331 -w db.json
import Form from './Form';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
import ConfirmationModel from './ConfirmationModel';


const url = 'http://localhost:3331/comments/';
function MainCrud() { 
  const [show, setShow] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showAddModel, setShowAddModel] = useState(false);
  const [isDelete, setIsdelete] = useState(null);
  const [isEdit, setIsEdit] = useState(null);
  const [arrOfAllData, setArrOfAllData] = useState([]);
  const [forEditObj, setForEditObj] = useState(null);

  const handleClose = () => {
    setShow(false)
    setShowDeleteModel(false)
    setShowEditModel(false)
    setShowAddModel(false)
  };
  const handleShow = () => {
    setShow(true)
    setForEditObj(null)
  };

  useEffect(() => {
      getDataApi();
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
   setShowAddModel(false)
  }

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
   getDataApi()
   setShow(false)
  }

  function handleDeleteConfirmation (id) {
  setIsdelete(id)
  setShowDeleteModel(true)
  }
  function handleEditConfirmation (id) {
  setIsEdit(id)
  setShowEditModel(true)
  }

  async function handleDelete(){
    try{
      let a = await fetch(url+isDelete,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
         }
      })
    }catch(err){
      alert(err)
    }
    getDataApi()
    setShowDeleteModel(false)
    setIsdelete(null)
  }
  async function handleEdit(){
  try{
    let a = await fetch(url+isEdit)
    let data = await a.json()
    setForEditObj(data)
    setShow(true)
  }catch(err){
    alert(err.message)
  }
  setShowEditModel(false)
  setIsEdit(null)
  }

  return ( 
    <> 
      <Button variant="primary" className='m-3 bg-black border-0 ' onClick={() => {setShowAddModel(true)}}>
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

      <ConfirmationModel show={showAddModel} handleClose={handleClose} title="Confirmation" confirmationMessage="Are you sure you want to Add some data?" onConfirm={handleShow} onCancel={handleClose} />

      <ConfirmationModel show={showDeleteModel} handleClose={handleClose} title="Confirmation" confirmationMessage="Are you sure you want to Delete this data?" onConfirm={handleDelete} onCancel={handleClose} />

      <ConfirmationModel  show={showEditModel} handleClose={handleClose} title="Confirmation" confirmationMessage="Are you sure you want to Edit this data?" onConfirm={handleEdit} onCancel={handleClose} />

      <Table arrOfAllData={arrOfAllData} forDelete={handleDeleteConfirmation} forEdit={handleEditConfirmation}/>
    </>
  );
}

export default MainCrud;