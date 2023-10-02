import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import ModelAddMedicine from './ModelAddMedicine';
import Table from './Table';

function MedicineIndex() {
  const url = 'http://localhost:3332/comments/'
  const [modalShow, setModalShow] = useState(false);
  const [medicine_data_array, setMedicine_data_array,] = useState([]);
  const [forEditData, setForEditData] = useState(null);

  useEffect(()=>{
    getData()
  },[]) 

  function handleAddMedicine() {
    setModalShow(true)
    setForEditData(null)
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

  async function handleEditId(id) {
    try {
      let response = await fetch(url+id)
      let data = await response.json()
      setForEditData(data)
      setModalShow(true)
    } catch (error) {
      alert(error)
    }
  }

  async function handleDeleteId(id) {
    try {
      let response = await fetch(url+id,{
        method : 'DELETE',
        headers : {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      alert(error)
    }
    getData()
  }

  return (
    <div>
        <Button variant="primary" onClick={handleAddMedicine}>
            Add Medicine
        </Button>
        <ModelAddMedicine show={modalShow} onHide={() => setModalShow(false)} medicine_data={handleMedicineData} forEditData={forEditData}/>
        <Table medicine_data_array={medicine_data_array} edit_id={handleEditId} delete_id={handleDeleteId}/>
    </div>
  )
}

export default MedicineIndex
