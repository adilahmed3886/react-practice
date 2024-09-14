import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";

function Test() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0)
    const [text, setText] = useState("click me")

    const input = useRef(null)

    const inputFunction = () => {
        setText(input.current.value)
        input.current.focus()
    }


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            setData(res.data[0].email)
        });
    }, [ ]);

  return (
    <div className='h-screen w-full text-white bg-zinc-800 text-center py-10'>
        <h1 className="cursor-pointer" onClick={inputFunction}>{count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>
            {text}
        </button>
        <h1>{data}</h1>
        <input type="text" className='text-black' ref={input}/>
    </div>
  )
}

export default Test

