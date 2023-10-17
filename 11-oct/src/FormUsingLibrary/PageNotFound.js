import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
    <div className='text-danger text-center'>
      <h1 className=' m-2'>Page not found</h1>
      <Link to='/' className='m-4 btn bg-warning' >Home</Link>
    </div>
  )
}

export default PageNotFound
