import React,{useState,useContext} from 'react'
import UserContext from '../context/usercontext'
function login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
const {setUser} = UserContext(UserContext);

    const handleSubmit = (e)=>{
          e.preventDefault()
          setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        value={username}
        onChange={() => setUsername(e.target.value)}
        placeholder='username' />
        {"  "}
        <input type='text'
        value={password}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login