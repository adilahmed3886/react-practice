import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos"

function App() {
  
  return (
    <>
      <h1 className="text-center text-white text-3xl mt-[2rem]">Todo <span className="text-red-600">Redux</span></h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
