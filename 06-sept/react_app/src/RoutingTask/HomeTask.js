import React from 'react'
import TaskList from './TaskList';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task3Sub from './Task3Sub';
import Login from './Login';
import About from './About';
import ProtectedRoute from './ProtectedRoute';
import { 
    Routes,
    Route,
 } from "react-router-dom";

function HomeTask() {
  return (
    <div>
      <Routes> 
            <Route path="/" element={<TaskList />} />
            <Route path="/about" element={<About />} />
            <Route path="/task1" element={<ProtectedRoute Component={Task1} />} />
            <Route path="/task2" element={<ProtectedRoute Component={Task2} />} />
            <Route path="task3" element={<ProtectedRoute Component={Task3} />} >
                <Route path=':taskId' element={<Task3Sub />} />
            </Route>
            <Route path="/task4" element={<ProtectedRoute Component={Task4} />} />
            <Route path="/task5" element={<ProtectedRoute Component={Task5} />} />
            <Route path="/login" element={<Login />} />
     </Routes>
    </div>
  )
}

export default HomeTask
