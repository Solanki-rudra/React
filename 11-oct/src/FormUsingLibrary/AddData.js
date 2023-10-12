import React from 'react'
import { Link } from 'react-router-dom'
import FormForData from './FormForData'

function AddData() {
  return (
    <div>
        <Link to='/' className='btn bg-warning' >Home</Link>
        <h1>data</h1>
        <FormForData />
    </div>
  )
}

export default AddData
