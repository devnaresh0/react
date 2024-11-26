import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/usercontext'
UserContext
useContext
function profile() {
    const {user} = UserContext(UserContext)
    
    
    if(!user) return <div>please Login</div>
  
    return <div>Welcome {user.username}</div>
    
}

export default profile