import React from 'react'
import Modal from 'react-bootstrap/Modal';

function ConfirmationModel({ show, handleClose, confirmationMessage, onConfirm, onCancel }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{confirmationMessage}</h5>
        <button className='btn bg-primary text-white' onClick={onConfirm}>Confirm</button>
        <button className='btn bg-primary text-white' onClick={onCancel}>Cancel</button>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default ConfirmationModel

