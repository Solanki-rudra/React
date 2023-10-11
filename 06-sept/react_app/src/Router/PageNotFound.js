import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='text-center'>
      <h1>Page not found</h1>
      <Link className='text-danger' to='/'>Home</Link>
    </div>
  )
}

export default PageNotFound
