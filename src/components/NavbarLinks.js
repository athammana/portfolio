import React from 'react';
import {Link} from 'react-scroll';


class NavbarLinks extends React.Component {
    render() {
        return (
            <ul className={'navlist' + this.props.listClass}>
                <li className='navitem'>
                    <Link
                        activeClass='active'
                        to='intro'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
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
        );
    }
}

export default NavbarLinks;