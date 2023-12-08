import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: 0
}

export const itemSlice = createSlice({
    name: 'item',
    initialState: initialState,
    reducers: {
        updateItem:(state,action)=>{
            // console.log(action)
            if(state.items === 0 && action.payload === -1)
                return;
            state.items += action.payload;
        }
    }
})

export const { updateItem } = itemSlice.actions

export default itemSlice.reducer