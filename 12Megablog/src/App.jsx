
import { useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from "./store/authslice"
import { Footer } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading,setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect( () => {
    authService.getCurruntUser().then((userData) => {
      if (userData) {
        dispatch(
          login(login(userData))
        )
        
      }else {
        dispatch(logout())
      }

    }).finally(() => setloading(false))
  }, [])

return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

    <div className='w-full block'>
    <Header />
    <main>
      <Outlet/>
    </main>
    <Footer />
    </div>
  </div>
) : null
}

export default App
