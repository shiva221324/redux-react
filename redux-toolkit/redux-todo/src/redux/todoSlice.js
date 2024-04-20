import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addtodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removetodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload);
    },
    updatetodo: (state, action) => {
      return state.map((todo, index) => {
        // console.log(action.payload);
        if (index === action.payload.index) {
          return {
            ...todo,
            item: action.payload.edit,
          };
        }
        return todo;
      });
    },
    completedtodo: (state, action) => {
      return state.map((todo, index) => {
        if (index === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addtodo, removetodo, updatetodo, completedtodo } =
  todoSlice.actions;
export default todoSlice.reducer;
