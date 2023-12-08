import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateItem } from '../feature/item/itemSlice'

function Details() {
    // const todo = useSelector(state => state.todoReducer)
    const items = useSelector(state => state.itemReducer.items)
    const dispatch = useDispatch()
    // console.log(items , todo)
  return (
    <div className='detailsWrapper'>
      <button className="btn" onClick={()=>dispatch(updateItem(-1))}>-</button>
      <h3>{items}</h3>
      <button className="btn" onClick={()=>dispatch(updateItem(1))}>+</button>
    </div>
  )
}

export default Details