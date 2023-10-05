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


import React, { useReducer } from 'react';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', index });
  };

  const removeTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', index });
  };

  return (
    <div>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTodo(index)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTodo(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}

export default TodoList;


