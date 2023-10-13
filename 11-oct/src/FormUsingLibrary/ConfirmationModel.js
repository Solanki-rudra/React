import React from 'react'

function ConfirmationModel({title,onConfirm,onCancel,show}) {
    const styling={
        display: show ? 'block' : 'none',
        position: 'fixed', 
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        backgroundColor: '#198754',
        padding: '10px 20px',
        borderRadius: '10px',
        boxShadow:'0px 0px 10px 0px black'
    }
    
  return (
    <div style={styling}>
      <h1 className='m-3 '>Confirmation</h1>
      <h3 className='m-3'>{title}</h3>
      <div className='m-3'>
        <button className="btn bg-warning m-1" onClick={onConfirm}>Confirm</button> 
        <button className="btn bg-warning m-1" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmationModel
