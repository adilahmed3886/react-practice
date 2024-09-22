import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [], // Starting with an empty array of todos
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // generate unique ID
        text: action.payload, // pass the text payload
        completed: false, // default completed status
      };
      state.push(newTodo); // push new todo to the state array
    },

    // Remove a todo by id
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    // Update a todo's text
    updateTodo: (state, action) => {
      const { id, text } = action.payload; // extract id and new text from payload
      const todo = state.find((todo) => todo.id === id); // find todo by id
      if (todo) todo.text = text; // if found, update the text
    },

    // Toggle the completion status of a todo
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload); // find todo by id
      if (todo) todo.completed = !todo.completed; // toggle completed status
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
