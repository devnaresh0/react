import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);

//  let counter = 15
  const addValue = () => {
    console.log("Click ",Math.random());
    
//counter++

// remove value
const removeCounter = () => {
  setCounter(counter -1);
}
setCounter(counter-1);
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button
    
    onClick={addValue}>Add Value</button>
    <br />
    <button>Remove Value</button>
    </>
  )
}

export default App
