import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ModelAddMedicine from './ModelAddMedicine';

function MedicineIndex() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>

        <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Medicine
        </Button>
        <ModelAddMedicine show={modalShow} onHide={() => setModalShow(false)} />
      
    </div>
  )
}

export default MedicineIndex
