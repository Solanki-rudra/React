// import React,{useReducer,useState} from 'react'

// function UseReducer() {
//     const [count, dispatch] = useReducer(reducer,0)
//     const [number, setNumber] = useState(0);
//     function reducer (state,action){
//             switch (action) {
//                 case 'add':
//                     return state+1
//                 case 'sub':
//                     return state-1
//                 default:
//                     return state
//             }
//     }
//   return ( 
//     <div>
//        <h1>UseReducer</h1>
//        <button className="btn bg-danger" onClick={()=>{dispatch('sub')}}>Minus</button>
//        <h1>{count}</h1>
//        <button className="btn bg-success" onClick={()=>{dispatch('add')}}>Add</button>
//        <br/>
//        <br/>
//        <button className="btn bg-danger" onClick={()=>{setNumber(pv=>pv-1)}}>Minus</button>
//        <h1>{number}</h1>
//        <button className="btn bg-success" onClick={()=>{setNumber(pv=>pv+1)}}>Add</button>
//     </div>
//   )
// }

// export default UseReducer




import React,{useReducer,useState} from 'react'

function reducer (curr_state,action){
        switch (action.type) {
            case 'ADD':
              return [...curr_state,{text:action.text,isChecked:false}]
            case 'DELETE':
              let arr = [...curr_state]
              let newArr = arr.filter((itm,ind)=>ind != action.index)
              return [...newArr]
            case 'MARK':
              let arrMark = [...curr_state]
              let newArrMark= arrMark.map((itm,ind)=>{
                // if (ind==action.index) {
                //   return {...itm,isChecked:action.isChecked}
                // }else{
                //   return itm
                // }
                return ind==action.index ? {...itm,isChecked:action.isChecked} : itm
              })
              return [...newArrMark]
            default:
              return curr_state
        }
}
function UseReducer() {
    const [state, dispatch] = useReducer(reducer,[])
    const [inputText, setInputText] = useState('');

    function addTodo() {
      dispatch({type:'ADD',text:inputText.trim()})
      setInputText('')
    }
    function deleteTodo(index) {
      dispatch({type:'DELETE',index:index})
    }
    function markTodo(isChecked,index) {
      dispatch({type:'MARK',isChecked:isChecked,index:index})
    }

  return ( 
    <div>
      <ul className='text-white'>
        {
          state.map((item,index)=>(
            <li key={index}>
              <input type="checkbox" onClick={(e)=>{markTodo(e.target.checked,index)}} />
              <span style={{ textDecoration: item.isChecked ? "line-through" : "none" }}>{item.text}</span>
              <button className="btn p-0 m-1 bg-danger" onClick={()=>deleteTodo(index)}>delete</button>
            </li>
          ))
        }
      </ul>
      <input type="text" value={inputText}  onChange={(e)=>{setInputText(e.target.value)}}/>
      <button className="btn bg-primary" onClick={addTodo}>Add</button>
    </div>
  )
}

export default UseReducer




