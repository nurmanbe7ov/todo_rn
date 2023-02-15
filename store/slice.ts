import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { TTodo } from "./types"

const slice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<TTodo>) => {
      state.todos.unshift(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(i => i.id !== action.payload)
    },
    doneTodo: (state, action: PayloadAction<string>) => {
      const doneId = state.todos.findIndex(el => el.id === action.payload)
      state.todos[doneId].isCompleted = !state.todos[doneId].isCompleted
    },
    moveTodo: (state, action: PayloadAction<string>) => {
      const moveId = state.todos.findIndex(el => el.id === action.payload)
      state.todos[moveId].isUrgent = !state.todos[moveId].isUrgent
    }
  }
})

export const { setTodos, deleteTodo, doneTodo, moveTodo } = slice.actions

export const todoReducer = slice.reducer
