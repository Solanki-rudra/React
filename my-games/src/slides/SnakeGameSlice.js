import { createSlice } from "@reduxjs/toolkit";

const snakeCell =  Array(900).fill(false)
snakeCell[0] = true

const initialState = {
    snakeCell,
}

export const SnakeGameSlice = createSlice({
    name: 'snake',
    initialState,
    reducers: {
        startGame:(state,actions)=>{
            state.snakeCell = Array(2000).fill(false)
            state.snakeCell[actions.payload] = true;
        }
    }
})

export const {startGame, } = SnakeGameSlice.actions

export default SnakeGameSlice.reducer