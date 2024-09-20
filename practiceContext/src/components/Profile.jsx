import React, { useContext } from 'react'
import { UserContext, useUser } from '../context/Context'

function Profile() {

    const {user} = useUser()
    if(!user) {
        return <div>Please Login</div>
    }
  return (
    <h1>Welcome {user.username}</h1>
  )
}

export default Profile