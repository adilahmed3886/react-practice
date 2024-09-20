import "./App.css";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { TodoProvider } from "./context/todoContext";
import React, { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'))
        if (storedTodos.length > 0) setTodos(storedTodos)
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo, completed: false}])
    } 

    const updateTodo = (id, todo) => {
      setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, ...todo} : todo))
    }

    const delteTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) =>  todo.id !== id))
    }

    const toggleComplete = (id) => {
      setTodos((prevTodos) => {
        prevTodos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}  : todo)
      })
    }
    



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, delteTodo, toggleComplete}}>
      <h1>Todo Project</h1>
      <Input/>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todos/>
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;
