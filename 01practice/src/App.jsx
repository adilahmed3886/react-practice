import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(1);

  const countUp = () => {
    count < 20 ? setCount(count + 1) : setCount(count)
  }

  const countDown = () => {
    count > 0 ? setCount(count -1) : setCount(count)
  }

  return (
    <>
        <h1>{count}</h1>
        <div className='button'>
        <button onClick={countUp}>Count +</button>
        <button onClick={countDown}>Count -</button>
        </div>
    </>
  )
}

export default App
