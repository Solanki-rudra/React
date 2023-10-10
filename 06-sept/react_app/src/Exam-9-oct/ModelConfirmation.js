import React from 'react'

function ModelConfirmation({onConfirm,onCancel,title,show}) {
  const styling = {
    display:show?'block':'none',
    width:'500px',
    padding:'10px 20px',
    position:'absolute',
    boxShadow:'0px 0px 40px 4px black'
  }
  return (
      <div style={styling} className='bg-white rounded mt-5'>
        <h1 className='text-success'>Confirmation</h1>
        <br />
        <h3>{title}</h3>
        <br />
        <button className="btn bg-primary" onClick={onConfirm}>Confirm</button>
        <button className="btn bg-primary" onClick={onCancel}>Cancel</button>
      </div>
  )
}

export default ModelConfirmation
