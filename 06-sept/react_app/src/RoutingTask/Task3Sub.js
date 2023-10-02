import React,{useState} from 'react'
import { 
    Routes,
    useParams,
    Route,
    Outlet,
    Link
 } from "react-router-dom";

function Task3Sub() {
    const {taskId} = useParams()
    let arr = [1,2,3,4,5,6,7,8]
    let newArray = arr.filter((item,index) => index < taskId)
    const [isClicked, setIsClicked] = useState(Array(taskId).fill(false));

    const handleClick = (index) => () => {
      console.log(index)
      setIsClicked((pv) =>{
        let updateArray = [...pv]
        updateArray[index] = !updateArray[index]
        return updateArray
      })
    }
  return (
    <div>
      {taskId > 8 && taskId < 1 ? (<h2>Page not found</h2>) : (
        <ul className='d-flex'>
          {newArray.map((item, index) => (
            <li key={index}>
              <button className='btn m-1' style={{ backgroundColor: isClicked[index] ? 'blue' : 'red' }} onClick={handleClick(index)} > {item} </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Task3Sub
