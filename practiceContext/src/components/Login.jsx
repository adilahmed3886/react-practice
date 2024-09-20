import React, { useContext, useState } from 'react'
import { UserContext, useUser } from '../context/Context'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useUser()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        setUsername('')
        setPassword('')
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        className='rounded-xl px-3'
         placeholder='username'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <input type="text"
         className='rounded-xl px-3 ml-2'
         placeholder='password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <button className='ml-3' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login