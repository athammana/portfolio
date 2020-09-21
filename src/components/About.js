import React from "react";
import SkillsTable from './SkillsTable';
// import { Button } from 'react-scroll';
// import ReactDOM from 'react-dom';
 
class About extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {  
      pieData: [
        { title: 'Javascript', value: 20, color: 'Lime' },
        { title: 'Python', value: 15, color: 'HoneyDew' },
        { title: 'Java', value: 35, color: 'Coral' },
        { title: 'C#', value: 20, color: 'Chartreuse' },
        { title: 'C++', value: 5, color: 'PeachPuff' } 
      ],
    };
  }
  
  // break() {
  //   console.log(ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(SkillsTable)));
  // }

  render() {
    return (
      <section id='about'>
        <div id='aboutbg' className='about-background'/>
        <div className='about-content'>
          <div className='left-card card container'>
            <h1 style={{textAlign: 'center'}}>
              Experience
            </h1>
            <h3 style={{textAlign: 'center', marginBottom:'5vh'}}>
              What I've done
            </h3>
            <SkillsTable />
          </div>
          <div className='right-card card container'>
            <h1 style={{textAlign: 'center'}}>
              About Me
            </h1>
            <h4 className='about-desc' style={{margin:'2vh', fontWeight: '100', lineHeight: '1.5'}}>
              Hi There! I'm a software engineer who would love to transform all of my fanatic ideas into reality.
              I am currently on track to graduate in May 2021, and would love to work at your company! I only
              have a couple internships worth of experience, but I have years of problem solving experience! Most
              of my experience is in languages like Javascript, and Full Stack Development, but I'm very motivated
              to learn more.
            </h4>
          </div>
        </div>
      </section>
    );
  }
}
 
export default About;