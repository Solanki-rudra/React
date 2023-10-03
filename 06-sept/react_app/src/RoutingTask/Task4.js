import React,{useState} from 'react'
import { 
    Link
 } from "react-router-dom";

function Task4() {
    let arr = [1,2,3,4,5,6,7,8]
    const [isClicked, setIsClicked] = useState(Array(arr.length).fill(false));
    const [isClicked2, setIsClicked2] = useState(Array(arr.length).fill(false));
    const [pairOfThree, setPairOfThree] = useState([]);

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

    const handleClick2 = (index) => () => {
        // console.log(index)
        // const howManyTrue = isClicked2.filter(item => item === true).length;
        const howManyInPair = pairOfThree.length;
      
        if (howManyInPair >= 3) {
          if (!isClicked2[index]) {
            const updatedArray = [...isClicked2];
            updatedArray[pairOfThree[0]] = !updatedArray[pairOfThree[0]];
            updatedArray[index] = !updatedArray[index];
            setIsClicked2(updatedArray);
            setPairOfThree(pv=>{
              let forUpdate = [...pv]
              forUpdate.shift()
              forUpdate.push(index)
              return forUpdate
            })
          } else {
            // setPairOfThree(pv=>{
            //   let forUpdate = [...pv]
            //   forUpdate.shift()
            //   forUpdate.push(index)
            //   return forUpdate
            // })
            const updatedArray = [...isClicked2];
            updatedArray[index] = !updatedArray[index];
            setIsClicked2(updatedArray);
          }
        } else {
          const updatedArray = [...isClicked2];
          updatedArray[index] = !updatedArray[index];
          setIsClicked2(updatedArray);
          setPairOfThree(pv => [...pv,index])
        }
      }

  return (
    <div>
      <Link className='m-1 bg-black p-2' to='/'>Home</Link>
      <h1>Task-4.1</h1>
      <ul className='d-flex'>
            {
                arr.map((item,index) => (
                    <li key={index}><button className='btn m-1'  style={{backgroundColor:isClicked[index]?'blue':'red'}} onClick={handleClick(index)}>{item}</button></li>
                ))
            }
      </ul>
      <h1>Task-4.2</h1>
      <ul className='d-flex'>
            {
                arr.map((item,index) => (
                    <li key={index}><button className='btn m-1'  style={{backgroundColor:isClicked2[index]?'blue':'red'}} onClick={handleClick2(index)}>{item}</button></li>
                ))
            }
      </ul>
    </div>
  )
}

export default Task4
