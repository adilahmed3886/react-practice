import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [passwrord, setPasswrord] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, passwrord})
        console.log(username)
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        {"  "}
        <input type="text" placeholder='password'
        value={passwrord}
        onChange={(e) => setPasswrord(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login