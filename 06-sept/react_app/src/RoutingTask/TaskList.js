import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    Link
 } from "react-router-dom";

function TaskList() {
  const navigate = useNavigate()

function handleLogout() {
  let login = localStorage.getItem('login')
  // console.log(login)
  if(login === 'true'){
    if(window.confirm('Are you sure you want to log out?')){
      localStorage.setItem('login',false)
    }
  }else{
    // console.log('else')
    alert('you are already logged out')
  }
}
  return (
    <div>
        <h1>Tasks : </h1>
      <Link className='m-1 bg-black p-2' to='/about'>About</Link>
      <Link className='m-1 bg-black p-2' to='/task1'>Task-1</Link>
      <Link className='m-1 bg-black p-2' to='/task2'>Task-2</Link>
      <Link className='m-1 bg-black p-2' to='/task3'>Task-3</Link>
      <Link className='m-1 bg-black p-2' to='/task4'>Task-4</Link>
      <Link className='m-1 bg-black p-2' to='/task5'>Task-5</Link>
      <Link className='m-1 bg-black p-2' to='/login'>Login</Link>
      <button className='m-1 bg-primary p-2' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default TaskList

