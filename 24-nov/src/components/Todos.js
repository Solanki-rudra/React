import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

function Todos({ editId }) {
    const todos = useSelector(state => state.todoReducer.todos)
    // console.log(todos)
    const dispatch = useDispatch()
    // console.log(todos)
    return (
        <div className='bg-red-950'>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Edit/Del</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => editId(item.id)}> Edit</button>
                                    <button onClick={() => { dispatch(removeTodo(item.id)) }}>Del</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todos
