import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo } from '../feature/todo/todoSlice';

function AddTodo({ forEdit, setForEdit }) {
  const todos = useSelector(state => state.todos)
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (forEdit) {
      let editName = todos.find(todo => todo.id === forEdit)
      setInputValue(editName.name)
    }
  }, [forEdit]);

  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    if(inputValue.replaceAll(' ','')){
      if (forEdit) {
        dispatch(editTodo({ id: forEdit, inputValue }))
      } else {
        dispatch(addTodo(inputValue))
      }
      setForEdit(null)
      setInputValue('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className='text-black' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <input className='btn bg-zinc-500' type="submit" value={forEdit ? 'Edit' : 'Add'} />
      </form>
    </div>
  )
}

export default AddTodo
