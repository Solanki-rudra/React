import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import ModelAddMedicine from './ModelAddMedicine';
import ConfirmationModel from './ConfirmModel';
import Table from './Table';

function MedicineIndex() {
  const url = 'http://localhost:3332/comments/'
  const [modalShow, setModalShow] = useState(false);
  const [handleShowDelete, setHandleShowDelete] = useState(false);
  const [handleShowEdit, setHandleShowEdit] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [medicine_data_array, setMedicine_data_array,] = useState([]);
  const [forEditData, setForEditData] = useState(null);

  useEffect(()=>{
    getData()
  },[]) 

  function handleAddMedicine() {
    setModalShow(true)
    setForEditData(null)
  }

  function handleClose() {
    setHandleShowDelete(false)
    setHandleShowEdit(false)
  }

  async function getData() {
    try {
      let response = await fetch(url)
      let data = await response.json()
      setMedicine_data_array(data)
    } catch (error) {
      alert(error)
    }
  }

  async function handleMedicineData(data) {
    try {
      let response = await fetch(url,{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      alert(error)
    }
    getData()
  }

  async function handleEditId() {
    try {
      let response = await fetch(url+editId)
      let data = await response.json()
      setForEditData(data)
      setModalShow(true)
    } catch (error) {
      alert(error)
    }
    setHandleShowEdit(false)
  }
  function deleteIdConfirmation(id) {
    setDeleteId(id)
    setHandleShowDelete(true)
  }
  function editIdConfirmation(id) {
    setEditId(id)
    setHandleShowEdit(true)
  }
  async function handleDeleteId() {
    try {
      let response = await fetch(url+deleteId,{
        method : 'DELETE',
        headers : {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      alert(error)
    }
    getData()
    setHandleShowDelete(false)
  }

  return (
    <div>
        <Button variant="primary" onClick={handleAddMedicine}>
            Add Medicine
        </Button>
        <ModelAddMedicine show={modalShow} onHide={() => setModalShow(false)} medicine_data={handleMedicineData} forEditData={forEditData}/>
        <Table medicine_data_array={medicine_data_array} edit_id={editIdConfirmation} delete_id={deleteIdConfirmation}/>

        <ConfirmationModel show={handleShowDelete} handleClose={handleClose} confirmationMessage={'Are you sure you want to Delete data?'} onConfirm={handleDeleteId} onCancel={handleClose} />

        <ConfirmationModel show={handleShowEdit} handleClose={handleClose} confirmationMessage={'Are you sure you want to Edit data?'} onConfirm={handleEditId} onCancel={handleClose} />
    </div>
  )
}

export default MedicineIndex
