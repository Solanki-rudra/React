import React from 'react'

function ModelConfirmation({onConfirm,onCancel,title,show}) {
  return (
    // <div style={{display:'flex', alignItems:'center', height:'100vh',justifyContent:'center'}}>
      <div style={{display:show?'block':'none',width:'500px'}} className='bg-white'>
      <h1>Confirmation</h1>
      <br />
      <h3>{title}</h3>
      <br />
      <button className="btn bg-primary" onClick={onCancel}>Cancel</button>
      <button className="btn bg-primary" onClick={onConfirm}>Confirm</button>
      </div>
    // </div>
  )
}

export default ModelConfirmation
