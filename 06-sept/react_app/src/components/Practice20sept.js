// import React,{useEffect, useState, useRef} from 'react'

// function Practice20sept() {
//     useEffect(() => {
//         console.log('run')
//         return () => {
//             console.log('clean')
//         };
//     }, []);

//   return (
//     <div>
//     </div>   
//   )
// }

// export default Practice20sept


// import React, { useEffect, useState } from 'react';

// function Practice20sept() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer;

//     if (count === 3) {
//       timer = setTimeout(() => {
//         console.log('useEffect triggered');
//       }, 1000);
//     }

//     return () => {
//       clearTimeout(timer);
//       console.log('return run');
//     };
//   }, [count === 3]); 

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// }

// export default Practice20sept;


// import React, { useEffect, useState } from 'react';

// function Practice20sept() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer;

//     if (count === 3) {
//       timer = setTimeout(() => {
//         console.log('useEffect triggered');
//       }, 1000);
//     }

//     return () => {
//       clearTimeout(timer);
//       console.log('return run');
//     };
//   }, [count === 3]); 

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// }

// export default Practice20sept;


// import React, { useEffect, useState,useRef } from 'react';

// function Practice20sept() {
//   const inputRef = useRef([]);

//   useEffect(() => {
//     // inputRef.current.focus();
//     inputRef.current.push(1)
//     console.log(inputRef.current) 
//   }, []);  

//   return (
//     <div>
//       <input type="text"  />
//     </div>
//   );
// }

// export default Practice20sept;



// import React, { useEffect, useState,useRef } from 'react';

// function Practice20sept() {
//   const inputRef = useRef({});

//   useEffect(() => { 
//     inputRef.current['name'] = 'Rudra'
//     console.log(inputRef.current) 
//   }, []);  

//   return (
//     <div>
//       <input type="text"  />
//     </div>
//   );
// }

// export default Practice20sept;




// import React, { useEffect, useState,useRef } from 'react';

// function Practice20sept() {
//   const [count, setCount] = useState(0);
//   const dataRef = useRef({
//     count: 0,
//     fruits: [],
//   });

//   useEffect(() => {
//     dataRef.current.count += 1;
//     dataRef.current.fruits.push('fruit'+dataRef.current.count);

//     console.log(dataRef.current);
//   }, [count]);
 
//   return (
//     <div> 
//       <button className='bg-white' onClick={() => setCount(pv => pv+1)}>{count}</button>
//       <ul>                                                             
//         {dataRef.current.fruits.map((item, index) => (                                                             
//           <li key={index}>{item}</li>                                                                                                                                                                  
//         ))}                                                                                                                                                                  
//       </ul>                                                                                                                                                                  
//     </div>                                                                                                                                                                  
//   );                                                                                                                                                                  
// }                                                                                                                                                                  
                                                                                                                                                                  
// export default Practice20sept;                                                                                                                                                                  


import React,{useEffect,useState,useRef} from "react";
function Practice20sept() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialAllowed, setIsSpecialAllowed] = useState(false);
  const passwordRef = useRef(null)

  useEffect(() => {
    printPassword()
    return () => {
      setPassword('')
    }
  },[length, isNumberAllowed, isSpecialAllowed,])

  function printPassword() {
    let pass = ''
    let totalChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy'
    if(isNumberAllowed) totalChar += '0123456789'
    if(isSpecialAllowed) totalChar += '!@#$%^&*(){}[]+-./='
    for(let i = 1; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * totalChar.length +1)
      pass += totalChar.charAt(randomNumber)
    } 
    setPassword(pass) 
  }
  function handleCopyBtn() {
    console.log(passwordRef.current.value)
    if (passwordRef.current) passwordRef.current.select()
    if (passwordRef.current) window.navigator.clipboard.writeText(passwordRef.current.value)
  }

  return (
    <>
    <div className="d-flex align-center m-5 gap-2 flex-column text-white w-25"> 
      <div className="d-flex align-center gap-2">          
        <input type="text" ref={passwordRef} className="text-black p-1" readOnly value={password} />  
        <button className="btn bg-primary" onClick={handleCopyBtn}>Copy</button>
      </div>  
      <div className="d-flex justify-center align-center gap-2">
        <label htmlFor="range">Length : {length}</label>
        <input type="range" id="range" min={8} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div>   
        <input type="checkbox" onChange={() => setIsNumberAllowed(pv => !pv)} id="number"/>   
        <label htmlFor="number">Number</label>        
      </div>                                      
      <div>                                                                                              
        <input type="checkbox" onChange={() => setIsSpecialAllowed(pv => !pv)} id="special"/>   
        <label htmlFor="special">Special</label>  
      </div>
    </div>                                                                                                                                 
    </>                                                                                                                                                                  
  );                                                                                                                                                                  
}           
export default Practice20sept