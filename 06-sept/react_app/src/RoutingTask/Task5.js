import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
function Task5() {
    const obj = {india:'delhi', russia:'moskow', gujrat:'gandhinagar', america:'washington', japan:'tokyo' }
    const [arr, setArr] = useState(Object.entries(obj));
    const [bgColor, setBgColor] = useState(Array(arr.flat().length).fill('white'));
    const [pair, setPair] = useState([]);
    useEffect(()=>{
      if (pair.length == 2) {
          let isMatch =  arr.some((item) =>
              item.includes(pair[0]) && item.includes(pair[1])
          );
          if (isMatch) {
              let newArr = arr.filter(item => 
                  !(item.includes(pair[0]) && item.includes(pair[1]))
              )
              setArr(newArr)
              setBgColor(bgColor.fill('white'))
          }else{
              let forRed = [...bgColor]
              forRed[arr.flat().indexOf(pair[0])] = 'red'
              forRed[arr.flat().indexOf(pair[1])] = 'red'
              setBgColor(forRed)
          }
          setPair([])
      }
    },[pair])
    function checker(index) {
            setPair(pv => [...pv,arr.flat()[index]])
            setBgColor(bgColor.fill('white'))
            let forGray = [...bgColor]
            forGray[index] = 'gray'
            setBgColor(forGray)
    }
  return (
    <div>
    <Link className='m-1 bg-black p-2' to='/'>Home</Link>
    <h1>Task-5</h1>
      <ul className='d-flex'>
        {
            arr.flat().map((item,index) => (
                <li key={index}><button style={{backgroundColor:bgColor[index]}} className='btn' onClick={()=>{checker(index)}}>{item}</button></li>
            ))
        }
      </ul>
    </div>
  )
}
export default Task5