import React from 'react'
import TaskList from './TaskList';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task3Sub from './Task3Sub';
import { 
    Routes,
    Route,
 } from "react-router-dom";

function HomeTask() {
  return (
    <div>
      <Routes> 
            <Route path="/" element={<TaskList />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="task3" element={<Task3 />} >
                <Route path=':taskId' element={<Task3Sub />} />
            </Route>
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
     </Routes>
    </div>
  )
}

export default HomeTask
