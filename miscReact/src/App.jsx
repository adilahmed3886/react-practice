import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")

  const generatePassword = () => {
    setPassword(Math.random().toString(36).slice(2))
  }

  return (
    <>
      <input className='p-2 rounded-xl'
       readOnly type="text" 
       value={password}
       />
      <button
      onClick={generatePassword}>Generate</button>
    </>
  )
}

export default App
