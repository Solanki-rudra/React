import React from 'react'
import Task3Sub from './Task3Sub';
import { 
    Routes,
    useParams,
    Route,
    Outlet,
    Link
 } from "react-router-dom";

function Task3() {
  return (
    <div>
      <Link className='m-1 bg-black p-2' to='/'>Home</Link>
      <h1>Task3</h1>
      <Task3Sub />
      
    </div>
  )
}

export default Task3
