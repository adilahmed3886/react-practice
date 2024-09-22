import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) todo.text = text;
        },
    }
});

export const { addTodo, deleteTodo, completeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
