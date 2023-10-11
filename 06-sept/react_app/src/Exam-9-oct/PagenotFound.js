import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <div className='text-center'>
        <h1 className='text-danger'>404 - Not Found</h1>
        <br />
        <Link to='/' className='m-1 bg-warning p-2 w-fit rounded text-black text-decoration-none'>Home</Link>
    </div>
  )
}

export default PagenotFound
