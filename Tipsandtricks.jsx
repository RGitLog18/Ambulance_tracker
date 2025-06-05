import Navbar from "./Navbar";
import "./TipsandTricks.css";
import {Link} from "react-router-dom";

function TipsandTricks({darkMode, changeTheme}) {
  return <div className="tips-and-tricks">
    <Navbar darkMode={darkMode} changeTheme={changeTheme}/>

    <div  className="tips-header">
      <span>"Alone we can do so little; together we can do so much." 
        – Helen Keller &nbsp; &nbsp;
      </span>
      <span>"Heroes may not be braver than anyone else. They’re 
        just braver five minutes longer." – Ronald Reagan &nbsp; &nbsp;
      </span>
      <span>"The best way to find yourself is to lose yourself in the service 
        of others." – Mahatma Gandhi &nbsp; &nbsp;</span>
    </div>
    
    {/* yt channels,articles,authority person to follow */}
    <div className="tips-content">
      
      <Link to="/articles" className="tt-card">
        <div className="tt-card-header">
          Articles
        </div>

        <div className="tt-card-img" >

        </div>

        <div className="tt-card-content">
          <button >GO! </button>
        </div>
      </Link>

      <Link to="/yt-references" className="tt-card">
        <div className="tt-card-header">
          Youtube References
        </div>

        <div className="tt-card-img" >

        </div>

        <div className="tt-card-content">
          <button >GO! </button>
        </div>
      </Link>

      <Link to="/influencers" className="tt-card">
        <div className="tt-card-header">
          Professional Advisors
        </div>

        <div className="tt-card-img" >

        </div>

        <div className="tt-card-content">
          <button >GO! </button>
        </div>
      </Link>

    </div>

  </div>
}

export default TipsandTricks;