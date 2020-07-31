import React from "react";
import MePic from "../ThirdPartyIcons/BoozPic.png";
import { Link } from "react-scroll";


class Intro extends React.Component{
    render(){
        return (
            <section id='intro' className='flex height-fix'>
                <div id='introbg' className='intro-background'></div>
                <div className='intro-content flex'>  
                    <img src={MePic} className="MePic" alt="Me" />
                    <h1>Yo</h1>
                    <h1>I'm AJ</h1>
                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        style={{cursor: 'pointer'}}>
                        <svg height="210" width="500">
                            <g fill="none">
                                <path stroke="white" strokeWidth='4' d="M 167 75 l 80 20 l 80 -20" />
                            </g>
                        </svg>
                    </Link>
                </div>
            </section>
        );
    }
}
 
export default Intro;