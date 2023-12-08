import { configureStore } from '@reduxjs/toolkit'
import SnakeReducer from '../slides/SnakeGameSlice'

export const store = configureStore({
    reducer: {SnakeReducer}
})
