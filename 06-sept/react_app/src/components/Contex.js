// import React,{createContext,useState} from 'react'
// import Contex2 from './Contex2'

// const data = createContext()
// const color = createContext()
// function Contex() {
//     const name = "rudra solanki"
//     const info = {age:18,course:'btech',learn:'react'}
//     const [bgColor, setBgColor] = useState(false);
//   return (
//     <div>
//         <data.Provider value={{name,info}}> 
//           <color.Provider value={bgColor}>
//                 <h1>I'm contex</h1>
//                 <button className='btn bg-primary' onClick={()=>{setBgColor(pv => !pv)}}>Change-color</button>
//                <Contex2 />
//           </color.Provider>
//         </data.Provider>
//     </div>
//   )
// }
// export default Contex
// export {data,color}




// import React,{createContext,useState} from 'react'
// import Contex2 from './Contex2'

// const data = createContext()
// const color = createContext()
// function Contex() {
//     const name = "rudra solanki"
//     const info = {age:18,course:'btech',learn:'react'}
//     const [bgColor, setBgColor] = useState(false);
//   return (
//     <div>
//         <data.Provider value={[name,info]}> 
//           <color.Provider value={bgColor}>
//                 <h1>I'm contex</h1>
//                 <button className='btn bg-primary' onClick={()=>{setBgColor(pv => !pv)}}>Change</button>
//                <Contex2 />
//           </color.Provider>
//         </data.Provider>
//     </div>
//   )
// }
// export default Contex
// export {data,color}




// import React,{createContext,useState} from 'react'
// import Contex2 from './Contex2'

// const data = createContext()
// const color = createContext()
// const title = createContext()
// function Contex() {
//     const name = "rudra solanki"
//     const info = {age:18,course:'btech',learn:'react'}
//     const [bgColor, setBgColor] = useState(false);
//   return ( 
//     <div>
//         <data.Provider value={{name,info}}> 
//           <color.Provider value={bgColor}>
//             <title.Provider value={name}/>
//                 <h1>I'm contex</h1>
//                 <button className='btn bg-primary' onClick={()=>{setBgColor(pv => !pv)}}>Change-color</button>
//                <Contex2 />
//           </color.Provider>
//         </data.Provider>
//     </div>
//   )
// }
// export default Contex
// export {data,color,title}




// import React,{createContext,useState} from 'react'
// import Contex2 from './Contex2'

// const data = createContext()
// function Contex() {
//     const name = "rudra solanki"
//     const info = {age:18,course:'btech',learn:'react'}
//     const [bgColor, setBgColor] = useState(false);
//   return ( 
//     <div>
//     <h1 className='m-3 text-danger'>UseContext</h1>
//         <data.Provider value={{ name, info, bgColor }}>
//            <h1>I'm contex</h1>
//            <button className='btn bg-primary' onClick={()=>{setBgColor(pv => !pv)}}>Change-color</button>
//            <Contex2 />
//         </data.Provider>
//     </div>
//   )
// }
// export default Contex
// export {data}




// import React,{useState,createContext} from 'react'
// import Contex2 from './Contex2'
// import Contex4 from './Contex4.js'

// const data = createContext()

// function Contex() {
//   const [count, setCount] = useState(0);
//   function updateCount() {
//     setCount(pv => pv+1)
//   }
//   return ( 
//     <div>
//     <h1 className='m-3 text-danger'>UseContext</h1>
//         <data.Provider value={{count,updateCount}}>
//            <h2>{count}</h2>
//            <Contex4 />
//         </data.Provider>
//     </div>
//   )
// }
// export default Contex
// export {data}



// import React,{createContext, useContext, useState} from 'react';

// const forCount = createContext();
// function Contex (){
//   const [count, setCount] = useState(0);
//   const updateCount = (newData) => {
//     setCount(pv => pv+newData);
//   };
//   return (
//     <forCount.Provider value={{ count, updateCount }}>
//       <div>
//         <h1>Data pass child to parent</h1>
//         <ParentComponent />
//         <ChildComponent />
//       </div>
//     </forCount.Provider>
//   );
// }
// export default Contex;


// const ParentComponent = () => {
//   const { count } = useContext(forCount);
//   return (
//     <div>
//       <h3>Data in ParentComponent: {count}</h3>
//     </div>
//   );
// }


// const ChildComponent = () => {
//   const { updateCount } = useContext(forCount);
//   const handleButtonClick = () => {
//     updateCount(1);
//   };
//   return (
//     <div>
//       <button className='btn bg-primary' onClick={handleButtonClick}>Add from child</button>
//     </div>
//   );
// }



// import React,{createContext, useContext, useState} from 'react';

// const forCount = createContext();
// function Contex (){
//   const [count, setCount] = useState(0);
//   function updateCount(value) {
//     setCount(pv=>pv+value)
//   }
//   console.log('parent')
//   return (
//     <forCount.Provider value={{ count, updateCount }}>
//       <h1>This is main parent</h1>
//       <h1 className='text-center text-white'>{count}</h1>
//       <Child1 />
//     </forCount.Provider>
//   );
// }
// export default Contex;


// function Child1() {
//   const count = useContext(forCount)
//   function updateCount() {
//     count.updateCount(1)
//   }
//   console.log('Child1')
//   return(
//     <div className='bg-warning '>
//     <h1>This is child-1</h1>
//     <button className="btn bg-primary" onClick={updateCount}>Add 1 from child1</button>
//     <Child2 />
//     </div>
//   )
// }


// function Child2() {
//   const count = useContext(forCount)
//   function updateCount() {
//     count.updateCount(2)
//   }
//   console.log('Child2')
//   return(
//     <div className='bg-danger '>
//     <h1>This is child-2</h1>
//       <button className="btn bg-primary" onClick={updateCount}>Add 2 from child2</button>
//     <Child3 />
//     </div>
//   )
// }


// function Child3() {
//   const count = useContext(forCount)
//   function updateCount() {
//     count.updateCount(-1)
//   }
//   console.log('Child3')
//   return(
//     <div className='bg-success '>
//       <h1>This is child-3</h1>
//       <button className="btn bg-primary" onClick={updateCount}>Minus 1 from child3</button>
//     </div>
//   )
// }
