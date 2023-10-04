// 1.------------------------------------------------------------------

// import React, { useCallback, useState, useMemo } from 'react';

// function ChildComponent({ onClick }) {
//   console.log('ChildComponent rendered');
//   return <button className='btn bg-primary' onClick={onClick}>Add</button>;
// }

// function UseCallback() {
//   const [count, setCount] = useState(0);
// //   const [sub, setSub] = useState(100);

// //   const handleClick = () => {
// //     console.log('Button clicked');
// //     setCount(count + 1);
// //   }

//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div className='p-5'>
//         <h1 className='m-3 text-danger'>UseCallback</h1>
//         <p>Count: {count}</p>
//         <ChildComponent onClick={handleClick} />
//         {/* <p>Count: {sub}</p>
//         <button className='btn bg-primary' onClick={() => {setSub(pv => pv-1)}}>Minus</button> */}
//     </div>
//   );
// }

// export default UseCallback


// 2.------------------------------------------------------------------

// import React, { useCallback, useState, useMemo } from 'react';


// function UseCallback() {
//     const [count, setCount] = useState(0);
//     //   const [sub, setSub] = useState(100);

// //   const print = () => {
// //     //some data
// //   }

//   const print = useCallback(() => {
//     //some data
//   },[])



//   return (
//     <div className='p-5'>
//         <h1 className='m-3 text-danger'>UseCallback</h1>
//         <ChildComponent func={print} />
//         <p>Count: {count}</p>
//         <button className='btn bg-primary' onClick={() => {setCount(pv => pv+1)}}>Add</button> 
//     </div>
//   );
// }

// function ChildComponent({ func }) {
//     console.log('printing....')
//     return(
//         <>
//         <h3>Child Component</h3>
//         </>
//     )
// }

// export default UseCallback


// 3.------------------------------------------------------------------


import React, { useCallback, useState } from 'react';
import UseCallbackChild from './UseCallbackChild';

function UseCallback() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState(true);

    // function print() {
    //     console.log('print function called')
    //     return count
    // }

    const print = useCallback(() => {
        console.log('print function called')
        return count
      },[count])
    
  return (
    <div className='p-5' style={{backgroundColor:theme?'white':'black',color:theme?'black':'White'}}>
        <h1 className='m-3 text-danger'>UseCallback</h1>
        <UseCallbackChild func={print} />
        <button className='btn bg-primary' onClick={() => {setCount(pv => pv+1)}}>Add</button> 
        <button className="btn bg-success" onClick={()=>{setTheme(pv => !pv)}}>{!theme?'Light':'Dark'}</button>
    </div>
  );
}
export default UseCallback