import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todoSlice'
import itemReducer from '../feature/item/itemSlice'
import gameReducer from '../feature/game/gameSlice'


export const store = configureStore({
    reducer: {todoReducer,itemReducer, gameReducer}
})
