import React,{useMemo,useState,useEffect} from 'react'
import Child from './UsememoChild';

function UsememoPrac() {
  //1.---------------------------------------------------------------------
//     const [add, setAdd] = useState(0);
//     const [sub, setSub] = useState(1000);
//     // console.log('body')

//     // function multiply(){
//     //     console.log('multiply')
//     //     return add*10
//     // }

//     const multiply = useMemo(() => {
//         console.log('multiply')
//         return add*10
//     }, [add])

//     // useEffect(() => {
//     //     console.log('multiply')
//     //     return add*10
//     // }, [add]);

//     return (
//         <div>
//       <h1>Use memo</h1>
//         {/* {multiply()} */}
//         {multiply}
//         <br/>
//       <button className="btn bg-primary" onClick={()=>{setAdd(pv=>pv+1)}}>Add</button>
//       <span>{add}</span>
//       <br />
//       <br />
//       <button className="btn bg-primary" onClick={()=>{setSub(pv=>pv-1)}}>Sub</button>
//       <span>{sub}</span>
//     </div>
//   )
// }


  //2.---------------------------------------------------------------------

// const [Quantity, setA] = useState(1);
// const [Price, setB] = useState(10);

// const Total = useMemo(() => {
//   console.log("Calculating Total...");
//   return Quantity * Price;
// }, [Price]);

// return (
//   <div>
//     <p>Quantity: {Quantity}</p>
//     <p>Price: {Price}</p>
//     <p>Total: {Total}</p>
//     <button className='btn bg-primary' onClick={() => setA(Quantity + 1)}>Add Quantity</button>
//     <button className='btn bg-primary' onClick={() => setB(Price + 1)}>Increase Price</button>
//   </div>
// );
// }


  // //3.---------------------------------------------------------------------


  //   const [items, setItems] = useState([1]);
  
  //   const evenNumbers = useMemo(() => {
  //     console.log("calculating even numbers...");
  //     return items.filter(item => item % 2 === 0);
  //   }, [items.length%5===0]);
  
  //   return (
  //     <div>
  //       <p>Original Items: {items.join(', ')}</p>
  //       <p className='m-0'>Even Numbers: {evenNumbers.join(', ')}</p>
  //       <p className='text-black mb-3'>(get even after items become multiply of 5 times)</p>
  //       <button className='btn bg-primary' onClick={() => setItems([...items, items[items.length-1]+1])}>Add</button>
  //     </div>
  //   );
  // }


  //4.---------------------------------------------------------------------


    const [count, setCount] = useState(0);

    return (
      <div>
        <h1 className='m-2 text-danger'>UseMemo</h1>
        <Child />
        <h4>Number -- {count}</h4>
        <button className='btn bg-primary' onClick={() => setCount(pv => pv+1)}>Add</button>
      </div>
    );
  }

  

export default UsememoPrac 
