import React from 'react';

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progress: props.completed};
    }

    // componentDidMount(){
    //     // window.addEventListener('scroll', () =>{
    //     //     const bar = document.getElementById(`'bar-${this.props.barNum}'`);
    //     //     const position = bar.getBoundingClientRect();
    //     //     const isAbout = position.top >= 0 && position.bottom <= window.innerHeight
    //     //     if(isAbout){
    //     //         console.log('visible');
    //     //     } else {
    //     //         // nav.classList.remove('scrolled');
    //     //     }
    //     // });
    //     var temp = this.state.progress;
    //     this.setState({progress: 0});
    //     setTimeout(() => this.setState({progress: temp}), 2000);
    // }

    // componentWillUnmount(){
    //     window.removeEventListener('scroll');
    // }

    // useEffect(() => {
    //     const bar = document.getElementById(`'bar-${this.props.barNum}'`);
    //     const position = bar.getBoundingClientRect();
    //     const isAbout = position.top >= 0 && position.bottom <= window.innerHeight;
    //     if(isAbout){
    //         console.log('visible');
    //     }
    // }, []);

    render(){
        return (
            <div className='containerStyles'>
                <div className='fillerStyles'>
                    <span id={this.props.barNum} className='labelStyles' style={{width:`${this.state.progress}%`, backgroundColor: this.props.bgcolor}}>{`${this.state.progress}%`}</span>
                </div>
            </div>
        );
    }
}

export default ProgressBar;