import React,{useState} from 'react'
import { 
    Link
 } from "react-router-dom";

function DataArray({data}) {
  const [isClicked, setIsClicked] = useState(Array(data.length).fill(false));

  const handleClick = (index) => () => {
    console.log(index)
    setIsClicked((pv) =>{
    //  return [...pv, pv[index] = !pv[index]]
      let updateArray = [...pv]
      updateArray[index] = !updateArray[index]
      return updateArray
    })
  }
  return (
    <div>
      <Link className='m-1 bg-black p-2' to='/'>Home</Link>
      <h1>task1</h1>
      <ul className='d-flex'>
        {
            data.map((item,index) => (
                <li key={index}><button className='btn m-1' style={{backgroundColor:isClicked[index]?'blue':'red'}} onClick={handleClick(index)}>{item}</button></li>
            ))
        }
      </ul>
    </div>
  )
}

export default DataArray
