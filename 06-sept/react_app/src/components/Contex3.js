// import React,{useContext} from 'react'
// import {data,color} from './Contex'

// function Contex3() {
//     const myInfo = useContext(data);
//     const bgColor = useContext(color);
//     console.log(myInfo)
//   return (
//     <div style={{backgroundColor:bgColor?'blue':'yellow',color:bgColor?'white':'black'}}>
//     <h1>I'm contex3</h1>
//       <h2>{myInfo.name}</h2>
//       <h3>{myInfo.info.age}</h3>
//       <h3>{myInfo.info.course}</h3>
//       <h3>{myInfo.info.learn}</h3>
//     </div>
//   )
// }

// export default Contex3


// import React,{useContext} from 'react'
// import {data,color} from './Contex'

// function Contex3() {
//     const myInfo = useContext(data);
//     const bgColor = useContext(color);
//     console.log(myInfo)
//   return (
//     <div style={{backgroundColor:bgColor?'blue':'yellow',color:bgColor?'white':'black'}}>
//     <h1>I'm contex3</h1>
//       <h2>{myInfo[0]}</h2>
//       <h3>{myInfo[1].age}</h3>
//       <h3>{myInfo[1].course}</h3>
//       <h3>{myInfo[1].learn}</h3>
//     </div>
//   )
// }

// export default Contex3 



import React,{useContext} from 'react'
import {data} from './Contex'

function Contex3() {
    const myInfo = useContext(data);
    console.log(myInfo)
  return (
    <div style={{backgroundColor:myInfo.bgColor?'blue':'yellow',color:myInfo.bgColor?'white':'black'}}>
    <h1>I'm contex3</h1>
      {/* <h2>{topic}</h2> */}
      <h3>{myInfo.name}</h3>
      <h3>{myInfo.info.age}</h3>
      <h3>{myInfo.info.course}</h3>
      <h3>{myInfo.info.learn}</h3>
    </div>
  )
}

export default Contex3