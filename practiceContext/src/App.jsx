import React from 'react'
import { UserContextProvider } from './context/Context'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>Login Form</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App