import React,{useState} from 'react'
import { 
    Routes,
    useParams,
    Route,
    Outlet,
    Link
 } from "react-router-dom";

function Task2() {
    let arr = [1,2,3,4,5,6,7,8]
    const [isClicked, setIsClicked] = useState(Array(arr.length).fill(false));

    const handleClick = (index) => () => {
      console.log(index)
      setIsClicked((pv) =>{
        let updateArray = [...pv].fill(false)
        updateArray[index] = !updateArray[index]
        return updateArray
      })
    }

  return (
    <div>
      <Link className='m-1 bg-black p-2' to='/'>Home</Link>
      <h1>Task2</h1>
        <ul className='d-flex'>
            {
                arr.map((item,index) => (
                    <li key={index}><button className='btn m-1'  style={{backgroundColor:isClicked[index]?'blue':'red'}} onClick={handleClick(index)}>{item}</button></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Task2
