import React from 'react'
import Task3Sub from './Task3Sub';
import { 
    Link
 } from "react-router-dom";

function Task3() {
  return (
    <div>
      <Link className='m-1 bg-black p-2' to='/'>Home</Link>
      <h1>Task3</h1>
      <h6>Change url like this -- /task3/5 (1 to 8) </h6>
      <Task3Sub />
    </div>
  )
}

export default Task3
