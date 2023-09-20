// import React,{useState,useEffect} from 'react'

// function ReverseCounter() {
//     const [count, setCount] = useState(60);
//     const [showNotif, setShowNotif] = useState(false);
//     useEffect(()=>{
//         let timer;
//         if (count === 60) {
//             setShowNotif(true)
//         } else {
//              timer = setTimeout(()=>{
//                 setCount(pv => pv-1)
//                 console.log(count)
//             },1000)
//         }
//         console.log('Run')
//         return () => {
//             console.log("return" + count)
//             clearTimeout(timer)
//         }
//     },[])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <div style={{display:showNotif?'block':'none'}} className='bg-white text-success p-4 rounded'>
//         <h1>Timer is over</h1>
//       </div>
//     </div>
//   )
// }
// export default ReverseCounter


// import React,{useState,useEffect} from 'react'

// function ReverseCounter() {
//     const [count, setCount] = useState(60);
//     useEffect(()=>{
//       const interval = setInterval(() => {
//         setCount(pv => pv-1)
//       }, 1000);

//       return () => {
//         clearInterval(interval)
//       }
//     },[])
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default ReverseCounter



// import React,{useState,useEffect,useRef} from 'react'

// function ReverseCounter() {
//     const [count, setCount] = useState(60);
//     const first = useRef(second)
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default ReverseCounter




// import React,{useRef} from 'react'

// function ReverseCounter() {
//     const count = useRef(0)
//     const handleClick =() => {
//       count.current +=1
//       alert('You are '+count.current+' times clicked')
//     } 
//   return (
//     <div>
//       <button onClick={handleClick}>{count.current} Clicked</button>
//     </div>
//   )
// }

// export default ReverseCounter



// import React,{useRef} from 'react'

// function ReverseCounter() {
//     const count = useRef(0)
//     const handleClick =() => {
//       count.current +=1
//       alert('You are '+count.current+' times clicked')
//       console.log(count.current)
//     } 
//   return (    
//     <div>
//       <button onClick={handleClick}>{count.current} Clicked</button>
//     </div>
//   )   
// }

// export default ReverseCounter



