import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='mb-[65vh] text-2xl'>Background Color Changer</h1>
        <div className='Buttons mb-10'>
          <Button backgroundColor = "RED" rounded="rounded-l-full"/>
          <Button backgroundColor = "GREEN"/>
          <Button backgroundColor = "BLUE"/>
          <Button backgroundColor = "OLIVE"/>
          <Button backgroundColor = "GRAY"/>
          <Button backgroundColor = "YELLOW"/>
          <Button backgroundColor = "PINK"/>
          <Button backgroundColor = "PURPLE"/>
          <Button backgroundColor = "LAVENDER"/>
          <Button backgroundColor = "WHITE"/>
          <Button backgroundColor = "BLACK" rounded='rounded-r-full'/>
        </div>
    </>
  )
}

export default App
