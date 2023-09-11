// import React,{useState} from 'react'

// function Todo() {
//     const [item, setItem] = useState('');
//     let [arr, setArr] = useState([]);
//     const [editItem, setEditItem] = useState(null);

//     const listAdder = (e) => {
//         if (id !== null) {
//             setItem(e.target.value)
//             arr[id] = item
//             console.log(arr);
//             setArr([...arr])   
//         }else{y
//             if (!!item && item.replaceAll(' ','')) {
//                 setArr([...arr, item]);
//                 setItem('')
//             }
//         }
//     }
//     const editer = (index) => () => {
//         // console.log('edit');
//         // console.log(index);
//         // document.querySelector('input[type="text"]').value = arr.find((item ,ind) => ind === index);
//         setItem()
//         id = index
//     }
//     const deleter = (index) => () => {
//         // console.log('del');
//         // console.log(index);
//         // console.log(arr);
//         arr = arr.filter((item, ind) => ind !== index)
//         // console.log(arr);
//         setArr([...arr])
//         // setArr([...arr,item.key != index])
//     }
//   return (
//     <div>
//       <input type="text" className="btn" value={item} onChange={(e)=>{setItem(e.target.value)}}/>
//       <button className="btn" onClick={listAdder}>Add</button>
//       <ul>
//         {
//             arr.map((val,ind) => 
//                 (<li key={ind}><span>{val}</span><div><button className="btn2" onClick={deleter(ind)}>Del</button>
//                 <button className="btn2" onClick={editer(ind)}>Edit</button></div> </li>)
//             )
//         }
//       </ul>
//     </div>
//   )
// }

// export default Todo

