import React from "react";
import MediaQuery from 'react-responsive';
import HamburgerMenu from 'react-hamburger-menu';
import NavbarLinks from './NavbarLinks';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    scrollFunc(){
        const isTop = window.scrollY > 100;
        const nav = document.getElementById('navbar');
        if (isTop) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollFunc);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollFunc);
    }

    handleClick(){
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        return (
            <div id='navbar' className='header'>
                <MediaQuery minDeviceWidth={768}>
                    <NavbarLinks listClass='navlist'/>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768 - 1}>
                    <HamburgerMenu 
                        className='hamburger'
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                    <div className='navbox'><NavbarLinks /></div>
                </MediaQuery>
            </div>
        );
    }
}
 
export default Navbar;