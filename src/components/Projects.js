import React from "react";
import Thumbnail from "./Thumbnail.js";
import TwitLogo from "../ThirdPartyIcons/Twitter_Logo_Blue.svg";
import LinkedInLogo from "../ThirdPartyIcons/Linked.png";
import GitLogo from "../ThirdPartyIcons/GitHub.png";


function Projects(props) {
  return (
    <div>
      <h1>I did this and this and this</h1>
      {/* <TwitLogo className="App-logo" /> */}
      <img src={TwitLogo} className="App-logo" alt="Logo" />
      <img src={LinkedInLogo} className="App-logo" alt="Logo" />
      <img src={GitLogo} className="App-logo" alt="Logo" />
      {/* <LinkedInLogo className="App-logo" /> */}
      {/* <GitLogo className="App-logo" /> */}
      {/* <Thumbnail
        link="/twitter"
        image="./images/Twitter_Logo_Blue.png"
        title="Twitter Newsfeed"
        category="Mobile App"
      
      <Thumbnail
        link="/airbnb"
        // image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
      />
      
      <Thumbnail
        link="/photoshop"
        // image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      /> */}
    </div>
  )
}
 
export default Projects;