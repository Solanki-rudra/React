import React from 'react'
import { 
    useParams
 } from "react-router-dom";

function Data() {
    const {useId} = useParams()
  return (
    <div>
        <h1>{useId}</h1>
    </div>
  )
}

export default Data
