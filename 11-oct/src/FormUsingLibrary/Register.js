import React from 'react'
import { Link } from 'react-router-dom'
import FormForData from './FormForData'

function Register() {
  return (
    <div>
    <Link to='/' className=' m-4 btn bg-warning' >Home</Link>
        <FormForData />
    </div>
  )
}

export default Register
