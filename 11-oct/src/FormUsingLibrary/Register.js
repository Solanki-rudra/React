import React from 'react'
import { Link } from 'react-router-dom'
import FormForData from './FormForData'

function Register() {
  return (
    <div>
    <Link to='/' className='btn bg-warning' >Home</Link>
      <h1>Register</h1>
        <FormForData />
    </div>
  )
}

export default Register
