import "./Body.css";
import React from 'react';

function Body(darkMode) {
    return <div className={darkMode.darkMode? "dark-body" : "light-body"}>
        <div className={darkMode.darkMode? "availOptns-dark":"availOptns-light"}>

        <div className={darkMode.darkMode?  "dark-cards":"light-cards"}>
            <div className={darkMode.darkMode? "card-dark":"card-light"}>
book ambulance
            </div>

            <div className={darkMode.darkMode? "card-dark":"card-light"}>
medical check-up
            </div>

            <div className={darkMode.darkMode? "card-dark":"card-light"}>
advice from doctor AI
            </div>

            <div className={darkMode.darkMode? "card-dark":"card-light"}>
when caught in emergency
            </div>
        </div>

        </div>

        <div className={darkMode.darkMode? "recentUpdates-dark":"recentUpdates-light"}>

        </div>
    </div>
}

export default Body;