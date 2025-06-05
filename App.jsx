import { useState , useEffect} from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import "./Components/Navbar.css"
import Body from './Components/Body'
import "./Components/Body.css"
import Homepage from './Components/Homepage'
import "./Components/Homepage.css"
import Checkup from './Components/Checkup'
import AmbulanceBooking from './Components/AmbulanceBooking'
import TipsandTricks from './Components/Tipsandtricks'
import AIQuiz from './Components/AIQuiz'
import Articles from './Components/Articles'
import YTRef from './Components/YTRef'
import Influencers from './Components/Influencers'

function App() {
  let [darkMode,setDarkMode] = useState(localStorage.getItem("darkMode") === "true"); //saves value even after reload

  function changeTheme() //to change as clicked
  {
    setDarkMode((prev)=>!prev);
  }

  useEffect(()=>{localStorage.setItem("darkMode",darkMode)} , [darkMode]);

  return (
    <>
    <BrowserRouter>
    {/* <Homepage/> */}
    <Routes>
      <Route path="/" element={<Homepage darkMode={darkMode} changeTheme={changeTheme} />} />
      <Route path="/home" element={<Homepage darkMode={darkMode} changeTheme={changeTheme}/>} />
      <Route path='/medical-checkup' element={<Checkup darkMode={darkMode} changeTheme={changeTheme}/>}/>
      <Route path='/book-ambulance' element={<AmbulanceBooking darkMode={darkMode} changeTheme={changeTheme}/>}/>
      <Route path='/doctor-ai' element={<AIQuiz/>}/>
      <Route path='/emergency-tips' element={<TipsandTricks darkMode={darkMode} changeTheme={changeTheme}/>}/>
      <Route path='/articles' element={<Articles darkMode={darkMode} changeTheme={changeTheme}/>}/>
      <Route path='/yt-references' element={<YTRef darkMode={darkMode} changeTheme={changeTheme}/>}/>
      <Route path='/influencers' element={<Influencers darkMode={darkMode} changeTheme={changeTheme}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
