// parent to child================================================================

// import React,{useState} from 'react'
// import Child from './Child';
// function Parent() {
//     const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button className="btn" onClick={() => {setCount(count+1)}}>Parent : Add</button>
//       <Child num={count} />
//     </div>
//   )
// }

// export default Parent

// child to parent =================================================================

import React,{useState} from 'react'
import Child from './Child';
function Parent() {
    const [count, setCount] = useState(0);
    const handleData = (data) => {
        setCount(count+data)
    }
  return (
    <div>
      <h1 className='btn'>Parent : {count}</h1>
      <Child  dataFromChild = {handleData} />
    </div>
  )
}

export default Parent
