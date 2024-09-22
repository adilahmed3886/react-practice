import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex justify-center items-center gap-2"
    >
      <input
        type="text"
        placeholder="Enter Task..."
        className="bg-zinc-700 rounded border border-gray-800 focus:border-red-600 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit" className="bg-red-700">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
