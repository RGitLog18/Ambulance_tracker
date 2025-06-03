import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import "./Components/Navbar.css"
import Body from './Components/Body'
import "./Components/Body.css"

function App() {
  let [darkMode,setDarkMode] = useState(localStorage.getItem("darkMode") === "true"); //saves value even after reload

  function changeTheme() //to change as clicked
  {
    setDarkMode((prev)=>!prev);
  }

  // useEffect(()=>{localStorage.setItem("darkMode",darkMode)} , [darkMode]);

  return (
    <>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
     <Navbar darkMode={darkMode} changeTheme={changeTheme}/>
      <Body darkMode={darkMode}/>
    </div>
    </>
  )
}

export default App
