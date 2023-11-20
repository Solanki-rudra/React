import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateItem } from '../feature/item/itemSlice'

function Cart() {
    const items = useSelector(state => state.itemReducer.items)
    // console.log(items)
    const dispatch = useDispatch()
  return (
    <div className='detailsWrapper'>
        <h2>Cart :</h2>
      <button className="btn" onClick={()=>dispatch(updateItem(-1))}>-</button>
      <h3>{items}</h3>
      <button className="btn" onClick={()=>dispatch(updateItem(1))}>+</button>
    </div>
  )
}

export default Cart
