import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <UserContextProvider>
    <h1>React with chai </h1>
    <login/>
    <profile/>
   </UserContextProvider>
  )
}

export default App
