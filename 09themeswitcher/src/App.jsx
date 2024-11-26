import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themebutton'
import Card from './components/card'

function App() {
  const {themeMode,setThemeMode} = useState("light");
  const lighttheme = () => {
    setThemeMode("light")
  }
  const darktheme = () => {
    setThemeMode("dark")
  }

  const [count, setCount] = useState(0)
 // actual chnage in theme
 useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
 },[
  themeMode
 ])

  return (
    <ThemeProvider value={{thememode,lightTheme,darkTheme}}>
   
<div className="flex flex-wrap min-h-screen items-center">

                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                        {/*themebtn*/}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*Card*/}
                      <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
