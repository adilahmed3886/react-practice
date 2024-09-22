import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

function AddTodo() {

    const [input, setInput] = React.useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input.trim()));
            setInput('');
        }
    };
    


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-5 text-center">
      <input
        type="text"
        className="bg-zinc-700 rounded border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo