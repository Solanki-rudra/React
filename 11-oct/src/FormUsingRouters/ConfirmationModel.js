import React from 'react'

function ConfirmationModel({title,onConfirm,onCancel,show}) {
    const styling={
        display:show?'block':'none',
        
    }
  return (
    <div style={styling}>
      <h1>Confirmation</h1>
      <h3>{title}</h3>
      <div>
        <button className="btn bg-primary" onClick={onConfirm}>Confirm</button>
        <button className="btn bg-primary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmationModel
