import React from "react";
import UserContext from '../context/usercontext'

const UserContextProvider = ({children}) =>{
     const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

