import React from "react";
import TwitLogo from "../ThirdPartyIcons/Twitter_Logo_Blue.svg";
import LinkedInLogo from "../ThirdPartyIcons/Linked.png";
import GitLogo from "../ThirdPartyIcons/GitHub.png";

import '../App.css';

function Sidebar(props) {
const ps = ['on', 'two', 'thre', 'four', 'five', 'siz', 'seeve', 'eight', '9', 'on', 'two', 'thre', 'four', 'five', 'siz', 'seeve', 'eight', '9'];

return (
    <div className="sidebar">
        <h1>AJ</h1>
        <h1>Thammana</h1>
        <img src={TwitLogo} className="App-logo" alt="Logo" />
        <img src={LinkedInLogo} className="App-logo" alt="Logo" />
        <img src={GitLogo} className="App-logo" alt="Logo" />
        <ul>
        {ps.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
        </ul>
    </div>
  )
}
 
export default Sidebar;