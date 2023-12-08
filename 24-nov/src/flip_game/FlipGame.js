import React, { useState } from 'react'

function FlipGame() {
  const swargkiapsara_meme = new Audio('/sounds/swargkiapsara.mp3');  
  const yeahboy_meme = new Audio('/sounds/yehboy.mp3');  
  const arrayOfCards = ['angry', 'cool', 'evil', 'fever', 'freeze', 'sneeze', 'thinking', 'vomit']
  const [flippedCards, setFlippedCards] = useState(Array(arrayOfCards.length * 2).fill(false));
  const [cards, setCards] = useState(arrayOfCards.concat(arrayOfCards.map(itm => itm + '2')).sort(() => 0.5 - Math.random()));
  const [cardPair, setCardPair] = useState([null, null]);
  const [isClicking, setIsClicking] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);

  function cardPairChecker(id) {
    return cardPair[0].length > id.length ? cardPair[0].slice(0, -1) === id : id.slice(0, -1) === cardPair[0]
  }

  function handleClick(id) {
    if (isClicking || flippedCards[cards.indexOf(id)]) {
      return;
    }
    setIsClicking(true)
    setClickCounter(pv => pv + 1)
    if (!cardPair[0]) {
      let newFlip = [...flippedCards];
      const cardIndex = cards.indexOf(id);
      newFlip[cardIndex] = true;
      setFlippedCards(newFlip);

      let newPair = [...cardPair];
      newPair[0] = id;
      setCardPair(newPair);
    } else {
      let newPair = [...cardPair];
      newPair[1] = id;
      setCardPair(newPair);

      if (!cardPairChecker(id)) {
        let newFlip = [...flippedCards];
        const cardIndex = cards.indexOf(id);
        newFlip[cardIndex] = true;
        setFlippedCards(newFlip);
        yeahboy_meme.play()

        setTimeout(() => {
          let newFlip = [...flippedCards];
          newFlip[cards.indexOf(id)] = false;
          newFlip[cards.indexOf(cardPair[0])] = false;
          setFlippedCards(newFlip);
          setCardPair([null, null]);
          setIsClicking(false);
        }, 800); 
      } else {

        const cardIndex = cards.indexOf(id);
        let updateFlipCards = [...flippedCards];
        updateFlipCards[cardIndex] = true;
        setFlippedCards(updateFlipCards);
        setCardPair([null, null]);
        setIsClicking(false);
      }
    }

    if (!cardPair[0] && !cardPair[1]) setIsClicking(false)
  }

  function result() {
    setTimeout(() => {
      let isGameOver = flippedCards.every(itm => itm)
      if (isGameOver) {
        swargkiapsara_meme.playbackRate = 2;
        swargkiapsara_meme.play()
        alert('Game Over, Total clicked: ' + clickCounter)
        reset()
      }
    }, 700);
  }
  result()

  function reset() {
    setClickCounter(0)
    setCardPair([null, null])
    setFlippedCards(pv => pv.fill(false))
    setCards(arrayOfCards.concat(arrayOfCards.map(itm => itm + '2')).sort(() => 0.5 - Math.random()))
  }

  return (
    <div>
      <h1>Mind game, if you have so, play.</h1>
      <div className='grid grid-cols-4 gap-1 sm:gap-2 w-fit mx-auto p-5'>
        {
          cards.map((card, index) => (
            <Card key={index} isOpen={flippedCards[cards.indexOf(card)]} onCardClick={(e) => handleClick(e.target.id)} id={card} imgSrc={`flip_game_images/${card.at(-1) === '2' ? card.slice(0, -1) : card}face.png`} />
          ))
        }
        <button className="btn hover:shadow-lg hover:-translate-y-0.5 duration-100 bg-[#F9754E] rounded w-fit p-1 px-2" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default FlipGame


function Card({ onCardClick, imgSrc, id, isOpen }) {

  return (
    <div className={`bg-gray-600 border-2 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] ${isOpen ? 'rotate-open' : 'rotate-close duration-300'}`}>
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