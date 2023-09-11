// 1-------------------------------------------------------------------------------

// import React from 'react'

// function Que() {
//     const multiElements = [
//         <div className='btn' >1 - div</div>,
//         <h1 className='btn' >2 - h1</h1>,
//         <p className='btn' >3 - p</p>,
//     ]
//   return (
//     <div>
//         {multiElements}
//     </div>
//   )
// }

// export default Que


// 2----------------------------------------------------------------------------------

import React from 'react'

function Que(props) {
    // props.name = 'Solanki' // --> Cannot assign to read only property 'age' of object '#<Object>
  return (
    <div>
      <h1 className="btn">{props.name}</h1>
      <h1 className="btn">{props.age}</h1>
      <h1 className="btn">{props.rollNum}</h1>
    </div>
  )
}

export default Que
