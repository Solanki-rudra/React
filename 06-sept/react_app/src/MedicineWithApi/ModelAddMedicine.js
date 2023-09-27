import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModelAddMedicine(props) {
  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Medicine
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <div className="row">
            <label htmlFor="medicine">Medicine</label>
            <input type="text" id='medicine' />
        </div>
        <div className="row">
            <label htmlFor="rack">Rack</label>
            <select id="rack">
                <option value="0" disabled selected>--select rack--</option>
                <option value="1">id-1 rack-1</option>
                <option value="2">id-2 rack-2</option>
                <option value="3">id-3 rack-3</option>
                <option value="4">id-4 rack-4</option>
                <option value="5">id-5 rack-5</option>
                <option value="6">id-6 rack-6</option>
                <option value="7">id-7 rack-7</option>
                <option value="8">id-8 rack-8</option>
                <option value="9">id-9 rack-9</option>
                <option value="10">id-10 rack-10</option>
            </select>
        </div>
        <div className="row">
            <label htmlFor="batchNumber">Batch</label>
            <input type="text" id='batchNumber' disabled readOnly className="bg-slate-400"/>
        </div>
        <div className="row">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id='quantity'/>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModelAddMedicine
