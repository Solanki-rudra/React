import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const { id, inputValue } = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, name: inputValue } : todo)
        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer