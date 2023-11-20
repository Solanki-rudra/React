import { createSlice } from "@reduxjs/toolkit";

const initialPlayers = (totalPlayers) => {
    return  Array(totalPlayers).fill(0).map((itm,ind)=>{
        return {id:ind+1,name:'player-'+(ind+1),number:null}
    })
}

const initialState ={
    players :initialPlayers(6),   
    averageValue:null,
}

export const gameSlice = createSlice({
    name : 'game',
    initialState : initialState,
    reducers : {
        playersResult : (state,action) => {
            // let updateResult = 
            // console.log('playerResult')
            let sum = state.players.reduce((acc,itm)=>acc+Number(itm.number),0)
            let avg = sum/state.players.length
            console.log(avg)
            state.averageValue = avg
            state.players.sort((a, b) => Math.abs(Number(a.number) - avg) - Math.abs(Number(b.number) - avg))
            // console.log(state.players)
        },
        playerUpdate : (state,action) => {
            // console.log(action.payload)
            const {index,selectedNumber} = action.payload

            state.players = state.players.map((player, i) => {
                if (i === index) {
                    return { ...player, number: selectedNumber };
                }
                return player;
            });

            // let playerObj = {
            //     id :index+1,
            //     name : 'player-'+(index+1),
            //     number:selectedNumber
            // }
            // console.log(playerObj)
            // state.players.push(playerObj)

            // console.log(state.players)
        },
        clearData : (state,action)=>{
            // state.players = Array(state.totalPlayers).fill(0).map((itm,ind)=>{
            //      return {id:ind+1,name:'player-'+(ind+1),number:null}
            // })
            console.log('clearDate'+ JSON.stringify(initialState))
            return initialState
            // console.log(state)
        }
    }
})

export const { playersResult , playerUpdate, clearData } = gameSlice.actions

export default gameSlice.reducer