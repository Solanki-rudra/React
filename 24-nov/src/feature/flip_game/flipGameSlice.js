import { createSlice } from "@reduxjs/toolkit";

const arrayOfCards = ['angry', 'cool', 'evil', 'fever', 'freeze', 'sneeze', 'thinking', 'vomit']
const initialState ={
    flippedCards:Array(arrayOfCards.length * 2).fill(false),
    cards:arrayOfCards.concat(arrayOfCards.map(itm => itm + '2')).sort(() => 0.5 - Math.random()),
    cardPair:[null,null],
    isClicking:false,
    clickCounter:0
}

export const flipGameSlice = createSlice({
    name : 'flip_game',
    initialState : initialState,
    reducers : {
       clickOnCard:(state,actions)=>{
        if (state.isClicking || state.flippedCards[state.cards.indexOf(actions.payload)]) {
            return;
          }
        //   setIsClicking(true)
        
        state.isClicking = true;
        //   setClickCounter(pv=>pv+1)
        state.clickCounter+=1
          // console.log()
          if (!state.cardPair[0]) {
            // Clicked the first card, flip it immediately
            let newFlip = [...state.flippedCards];
            const cardIndex = state.cards.indexOf(actions.payload);
            newFlip[cardIndex] = true;
            // setFlippedCards(newFlip);
            state.flippedCards = newFlip;
      
            let newPair = [...state.cardPair];
            newPair[0] = actions.payload;
            // setCardPair(newPair);
            state.cardPair = newPair;
          } else {
            // Clicked the second card
            let newPair = [...state.cardPair];
            newPair[1] = actions.payload;
            // setCardPair(newPair);
            state.cardPair = newPair;
      
            if (!state.cardPairChecker(actions.payload)) {
              // Cards don't match, flip them back after a short delay
              let newFlip = [...state.flippedCards];
              const cardIndex = state.cards.indexOf(actions.payload);
              newFlip[cardIndex] = true;
            //   setFlippedCards(newFlip);
            state.flippedCards = newFlip;
      
              setTimeout(() => {
                let newFlip = [...state.flippedCards];
                newFlip[state.cards.indexOf(actions.payload)] = false;
                newFlip[state.cards.indexOf(state.cardPair[0])] = false;
                // setFlippedCards(newFlip);
                 state.flippedCards = newFlip;
                // setCardPair([null, null]);
                 state.cardPair = [null,null];
                // setIsClicking(false);
                state.isClicking = false;
              }, 800); // Adjust the delay as needed
            } else {
              // Cards match, keep them flipped
              const cardIndex = state.cards.indexOf(actions.payload);
              let updateFlipCards = [...state.flippedCards];
              updateFlipCards[cardIndex] = true;
            //   setFlippedCards(updateFlipCards);
                state.flippedCards = updateFlipCards;
            //   setCardPair([null, null]);
            state.cardPair = [null, null];
            //   setIsClicking(false);
                state.isClicking = false;
            }
          }
      
          if(!state.cardPair[0] && !state.cardPair[1]) state.isClicking = false
       },
        resetGame:(state,actions)=>{
            state.cardPair = [null,null]
            state.flippedCards = state.flippedCards.fill(false)
            state.cards = arrayOfCards.concat(arrayOfCards.map(itm => itm + '2')).sort(() => 0.5 - Math.random())
       },
       cardPairChecker: (state, id) => {
        return state.cardPair[0] && state.cardPair[0].length > id.length
          ? state.cardPair[0].slice(0, -1) === id
          : id.slice(0, -1) === state.cardPair[0];
      },
    },

})

export const { clickOnCard, resetGame } = flipGameSlice.actions

export default flipGameSlice.reducer