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




import React,{createContext,useState} from 'react'
import Contex2 from './Contex2'

const data = createContext()
function Contex() {
    const name = "rudra solanki"
    const info = {age:18,course:'btech',learn:'react'}
    const [bgColor, setBgColor] = useState(false);
  return ( 
    <div>
        <data.Provider value={{ name, info, bgColor }}>
           <h1>I'm contex</h1>
           <button className='btn bg-primary' onClick={()=>{setBgColor(pv => !pv)}}>Change-color</button>
           <Contex2 />
        </data.Provider>
    </div>
  )
}
export default Contex
export {data}