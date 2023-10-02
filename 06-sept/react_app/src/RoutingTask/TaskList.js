import React from 'react'
import { 
    Routes,
    useParams,
    Route,
    Outlet,
    Link
 } from "react-router-dom";
function TaskList() {
  return (
    <div>
        <h1>Tasks : </h1>
      <Link className='m-1 bg-black p-2' to='task1'>Task-1</Link>
      <Link className='m-1 bg-black p-2' to='task2'>Task-2</Link>
      <Link className='m-1 bg-black p-2' to='task3'>Task-3</Link>
    </div>
  )
}

export default TaskList
