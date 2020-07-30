import React from "react";
import MePic from "../ThirdPartyIcons/BoozPic.png";


class Intro extends React.Component{
    render(){
        return (
            <section id='intro' className='flex height-fix'>
                <div id='introbg' className='intro-background'></div>
                <div className='intro-content flex'>  
                    <img src={MePic} className="MePic" alt="Me" />
                    <h1>Yo</h1>
                    <h1>I'm AJ</h1>
                    <svg height="210" width="500">
                        <g fill="none">
                            <path stroke="white" stroke-width="4" d="M 167 75 l 80 20 l 80 -20" />
                        </g>
                    </svg>
                </div>
            </section>
        );
    }
}
 
export default Intro;