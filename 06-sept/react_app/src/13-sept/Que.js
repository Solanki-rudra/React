//// 1.===========================================================================

// import React,{useState} from 'react'

// function Que() {
//     const [setCount,count] = useState(0);
//   return (
//     <div>
//       <h1>{setCount}</h1>
//       <button onClick={() => {count(pv => pv+1)}}>Add</button>
//     </div>
//   )
// }

// export default Que


//// 2.===========================================================================

// import React,{useState} from 'react'

// function Que() {
//     const [a,b] = useState(0);
//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={() => {b(pv => pv+1)}}>Add</button>
//     </div>
//   )
// }

// export default Que


//// 3.===========================================================================


// import React,{useState} from 'react'

// function Que({name,age,course}) {
    
//     // console.log(props)
//     // props.age = 19
//     // console.log(props)

//     console.log(name)
//     age = 19
//     name = 'Rudra Solanki'
//     console.log(name)

//   return (
//     <div>
//       {/* <h1>{props}</h1> */}
//     </div>
//   )
// }

// export default Que


//// 4.===========================================================================

// import React,{useState} from 'react'
// const arr = ["<div>Hello</div>",<h1>He</h1>]

// function Que() {
//   return (
//     <div>
//         ['<div key={0}>HelloBuddy</div>']
//         {arr.map(item => item)
//         }
//     </div>
//   )
// }

// export default Que


//// 5.===========================================================================

// import React,{useState} from 'react'

// function Que() {
//   return (
//     <div>
//         {/* <Model name='Rudra' /> */}
//         {Model('bhaumik')}
//     </div>
//   )
// }
// export default Que

// function Model (name) {
//     return(
//         <h1>model vs model {name}</h1>
//     )
// }


//// 6.===========================================================================

// import React,{useState} from 'react'

// function Que() {
//     const [count, setCount] = useState(0);
//     function adder() {
//         setCount(count+1)
//         console.log(count) //Please keep in mind that React state updates are asynchronous, so the console.log(count) statement immediately after setCount may not reflect the updated value. If you want to log the updated value, you can use the useEffect hook to observe changes in the count state variable.
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={adder}>Add</button>
//     </div>
//   )
// }
// export default Que


//// 7.===========================================================================

import React,{useState} from 'react'

function Que() {
    const [typeData, setTypeData] = useState('');
    const handleData = (data) => {
        setTypeData(data)
    }
  return (
    <div>
        <h1>{typeData}</h1>
        <Child dataSend={handleData}/>
    </div>
  )
}
export default Que

function Child(props){
    const [type, setType] = useState('');
    const  handleValue = (e) => {
        setType(e.target.value)
        props.dataSend(e.target.value)
    }
    return(
        <input type="text" value={type} onChange= {handleValue} />
    )
}