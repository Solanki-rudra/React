import React,{useState} from 'react'
import { 
    Link
 } from "react-router-dom";

function Task4() {
    let arr = [1,2,3,4,5,6,7,8]
    const [isClicked, setIsClicked] = useState(Array(arr.length).fill(false));

    const handleClick = (index) => () => {
        // console.log(index)
        const howManyTrue = isClicked.filter(item => item === true).length;
      
        if (howManyTrue >= 3) {
          if (!isClicked[index]) {
            alert('Max three allowed');
          } else {
            const updatedArray = [...isClicked];
            updatedArray[index] = !updatedArray[index];
            setIsClicked(updatedArray);
          }
        } else {
          const updatedArray = [...isClicked];
          updatedArray[index] = !updatedArray[index];
          setIsClicked(updatedArray);
        }
      }

  return (
    <div>
      <Link className='m-1 bg-black p-2' to='/'>Home</Link>
      <h1>Task-4</h1>
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

export default Task4
