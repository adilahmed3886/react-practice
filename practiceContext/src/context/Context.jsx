import React, {createContext, useContext, useState} from "react";
export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
 return (

    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
 )
}

export const useUser = () => useContext(UserContext)