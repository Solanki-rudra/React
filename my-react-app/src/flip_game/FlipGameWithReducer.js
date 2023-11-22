import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clickOnCard, resetGame } from '../feature/flip_game/flipGameSlice';

function FlipGameWithReducer() {
    let dispatch = useDispatch()
    let cards = useSelector(state=>state.flipGameReducer.cards)
    let flippedCards = useSelector(state=>state.flipGameReducer.flippedCards)
    console.log(cards)
  return (
    <div className='grid grid-cols-4 gap-2 w-fit mx-auto p-5'>
      {
        cards.map((card, index) => (
          <Card key={index} isOpen={flippedCards[cards.indexOf(card)]} onCardClick={(e) => dispatch(clickOnCard(e.target.id))} id={card} imgSrc={`flip_game_images/${card.at(-1) === '2' ? card.slice(0, -1) : card}face.png`} />
        ))
      }
      <button className="btn hover:shadow-lg hover:-translate-y-0.5 duration-100 bg-[#F9754E] rounded w-fit p-1 px-2" onClick={()=>dispatch(resetGame())}>Reset</button>
    </div>
  )
}

export default FlipGameWithReducer

function Card({ onCardClick, imgSrc, id, isOpen }) {
    // const rotationClass = isOpen ? 'rotate-open' : 'rotate-open';
  
    return (
      <div className={`bg-gray-600 border-2 w-[100px] h-[100px] ${isOpen ? 'rotate-open' : 'rotate-close duration-300'}`}>
        <button onClick={onCardClick} className="btn relative w-full h-full">
          <img
            src={imgSrc}
            id={id}
            className={`absolute top-0 z-10 `}
          />
          {!isOpen && (
            <img
              className={`h-full absolute top-0 z-10 `}
              id={id}
              src='flip_game_images/flipwrapper.jpg'
            />
          )}
        </button>
      </div>
    );
}
  