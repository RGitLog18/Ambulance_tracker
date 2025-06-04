import { useState } from 'react'
import Navbar from './Navbar'
import "./Navbar.css"
import Body from './Body'
import "./Body.css"

function Homepage({darkMode, changeTheme}) {

  return <div className={darkMode ? "dark-mode" : "light-mode"}>
     <Navbar darkMode={darkMode} changeTheme={changeTheme}/>
      <Body darkMode={darkMode}/>
    </div>
   
}

export default Homepage;
