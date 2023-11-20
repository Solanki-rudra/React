import React, { useState } from 'react'
// import Modal from './Modal'
import PlayerTable from './PlayerTable';
import Modal from './ResultModal';
import { useDispatch,useSelector } from 'react-redux';
import { playersResult } from '../feature/game/gameSlice';

function Home() {
  const dispatch = useDispatch()

  const playerList = useSelector(state=>state.gameReducer.players)
  // console.log('pl '+ JSON.stringify(playerList))


  const [isShowResult, setIsShowResult] = useState(false);
  return (
    <div className='p-5'>
      <div className='p-5 flex flex-wrap justify-center gap-2'>
        {
          playerList.map((item,index)=>(
            <PlayerTable key={index+1} index={index} name={item.name} number={item.number}/>
          ))
        }
      </div>
      <button className="btn bg-green-600 p-2 rounded" onClick={()=>{
          let anyNull = playerList.some(item => item.number === null)
          if(!anyNull){
            setIsShowResult(pv=>!pv)
            dispatch(playersResult())
          }else{
            alert('Waiting for player to finish...')
          }
        }}>Result</button>
      <Modal showModal={isShowResult} setShowModal={setIsShowResult} />
    </div>
  )
}

export default Home
