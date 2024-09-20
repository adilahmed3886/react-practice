import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider

// export const TodoProvider = ({children}) => {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const storedTodos = JSON.parse(localStorage.getItem('todos'))
//         if (storedTodos.length > 0) setTodos(storedTodos)
//     })

//     useEffect(() => {
//         localStorage.setItem('todos', JSON.stringify(todos))
//     }, [todos])

//     const addTodo = (todo) => {
//         setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo, completed: false}])
//     } 
// }