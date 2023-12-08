import React, { useState } from 'react'
// import Modal from './Modal'
import PlayerTable from './PlayerTable';
import Modal from './ResultModal';
import { useDispatch, useSelector } from 'react-redux';
import { playersResult, totalPlayers } from '../feature/game/gameSlice';

function Home() {
  const dispatch = useDispatch()
  const playerList = useSelector(state => state.gameReducer.players)
  const initialTotalPlayers = useSelector(state => state.gameReducer.players.length)
  const [input_players, setInput_players] = useState(initialTotalPlayers);
  // const totalPlayers = useSelector(state=>state.gameReducer.players)
  // console.log('pl '+ JSON.stringify(playerList))
  function handleOnChange(value) {
    if(value>1 && value<9){
      dispatch(totalPlayers(value))
    }
  }
// console.log('object')

  const [isShowResult, setIsShowResult] = useState(false);
  return (
    <div className='sm:p-5'>
      <div className='p-3 bg-green-600 w-fit rounded text-start'>
        <h2>Players : </h2>
        <input type="number" min={2} max={8}  value={input_players} className='px-1 my-1 text-black rounded' onChange={(e) =>     setInput_players(e.target.value)} />
        <br />
        {
          input_players > 8 || input_players < 2 ? <p className='text-red-700 text-sm'>Players range 2 to 8</p> : null
        }
        <button className="btn bg-gray-600 p-1 rounded px-2" onClick={()=>dispatch(totalPlayers(input_players))}>Set</button>
        
      </div>
      <div className='sm:p-5 pt-2 flex flex-wrap justify-center gap-2'>
        {
          playerList.map((item, index) => (
            <PlayerTable key={index + 1} index={index} name={item.name} number={item.number} />
          ))
        }
      </div>
      <button className="btn m-2 bg-green-600 p-2 rounded" onClick={() => {
        let anyNull = playerList.some(item => item.number === null)
        let anyHigh = playerList.some(item => item.number > 100 || item.number < 0)
        // console.log(anyHigh + ' anyh')
        if (!anyNull && !anyHigh) {
          setIsShowResult(pv => !pv)
          dispatch(playersResult())
        }else if (anyHigh){
          alert('Number between 0 to 100')
        }
         else {
          alert('Waiting for player to finish...')
        }
      }}>Result</button>
      <Modal showModal={isShowResult} setShowModal={setIsShowResult} />
    </div>
  )
}

export default Home
