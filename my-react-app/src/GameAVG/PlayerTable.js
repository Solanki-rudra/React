import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { playerUpdate } from '../feature/game/gameSlice'

function PlayerTable({ index, name, number }) {
  // console.log('number '+ number)
  const dispatch = useDispatch()
  // console.log(number)
  const [isShow, setIsShow] = useState(true)
  // const [selectedNumber, setSelectedNumber] = useState(Number(number))

  function handleOnChange(value) {
    dispatch(playerUpdate({ index, selectedNumber: value }))
    // setSelectedNumber(value)
  }
  return (
    <div className='p-5 bg-green-600 rounded w-48 sm:w-1/4 text-start'>
      <h2 className='mb-2'>{name}</h2>
      <input className={`text-gray-600 w-full px-2 rounded ${!isShow ? 'bg-gray-600' : 'bg-white'}`} value={number ? number : ''} onChange={(e) => handleOnChange(e.target.value)} type="number" min={0} max={100} placeholder='Enter 0 to 100' />

      <button className="btn bg-gray-600 p-1 mt-2 rounded" onClick={()=>{ setIsShow(pv => !pv)}}>{isShow ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default PlayerTable
