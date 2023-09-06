import React,{useState} from 'react'

function Mybuttons() {
    const [count, setCount] = useState(0);
    function increamenter() {
        setCount(count+=1);
    }
  return (
    <div>
        <button onClick={increamenter}>Clicked {count} time</button>
        <button onClick={increamenter}>Clicked {count} time</button>
    </div>
  )
}

export default Mybuttons
