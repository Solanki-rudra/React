import React from 'react'
import TaskList from './TaskList';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task3Sub from './Task3Sub';
import { 
    Routes,
    useParams,
    Route,
    Outlet,
    Link
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
            {/* <Route path="/learn" element={<Learn />} >
              <Route path='javaScript' element={<JavaScript />}></Route>
              <Route path=':courseId' element={<Course />}></Route>
              <Route path='react' element={<LearnReact />}>
                <Route path='ractNative' element={<ReactNative />}></Route>
                <Route path='nextJs' element={<NextJs />}></Route>
              </Route>
            </Route>  */}
     </Routes>
    </div>
  )
}

export default HomeTask
