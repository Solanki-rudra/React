import React,{useContext} from 'react'
import {data} from './Contex.js' 

function Contex4() {
    const dataFromChild = useContext(data)
  return (
    <div>
        <h1>This is contex4</h1>
        <button onClick={dataFromChild.updateCount} className="btn bg-primary">Add</button>
    </div>
  )
}
export default Contex4
