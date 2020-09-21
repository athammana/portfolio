import React from "react";
import { Link } from "react-scroll";

class Navbar extends React.Component{

    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY > 100;
            const nav = document.getElementById('navbar');
            if(isTop){
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    render(){
        return (
            <div id='navbar' className='header'>
                <ul className='navlist'>
                    <li className='navitem'>
                        <Link
                            activeClass='active'
                            to='intro'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}>
                            Intro
                        </Link>
                    </li>
                    <li className='navitem'>
                        <Link 
                            activeClass='active' 
                            to='about' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='navitem'>
                        <Link 
                            activeClass='active' 
                            to='projects' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className='navitem'>
                        <Link 
                            activeClass='active' 
                            to='contact' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Navbar;