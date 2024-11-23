import { useState } from "react"


function App() {
const [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
          style ={{backgroundColor: color}}


    >
      <div className="flex with flex-wrap justify-center bottom-48 inset-x-0 px-2 py-2 rounded">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
        <button 
        onClick={()=> setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "red"}}
        >
          RED
        </button>
        <button 
        onClick={()=> setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "green"}}
        >
          GREEN
        </button>
        <button 
                onClick={()=> setColor("blue")}

        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "blue"}}
        >
          BLUE
        </button>
        <button 
                onClick={()=> setColor("white")}

        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "white"}}
        >
          WHITE
        </button>
        <button 
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "red"}}
        >
          OLIVE
        </button>
        </div>  
      </div>
    </div>
  )
}

export default App
