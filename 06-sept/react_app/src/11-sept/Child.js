//parent to child=================================================================

// import React from 'react'

// function Child({num}) {
//   return (
//     <div>
//       <h1 className='btn'>Child : {num}</h1>
//     </div>
//   )
// }

// export default Child

// child to parent =================================================================

import React from 'react'

function Child(props) {
    const sendData = () => {
        props.dataFromChild(1)
    }
  return (
    <div>
      <button className="btn" onClick={sendData}>Child : Add</button>
    </div>
  )
}

export default Child
