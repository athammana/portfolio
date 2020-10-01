import React from "react";
import SkillsTable from './SkillsTable';
import {Grid, Typography, Paper} from '@material-ui/core'
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
        {/* <div className='about-content'> */}
        <Grid container spacing={2}>
          <Grid item s={12} m={4}>
            <Paper elevation={3}>
            <Typography variant='h2'>
              Experience
            </Typography>
            <Typography>
              What I've done
            </Typography>
            <SkillsTable />
          </Paper>
          </ Grid>
          <Grid item s={12} m={4} l={4} xl={4}>
          {/* <div className='right-card card container'> */}
          <Paper elevation={3}>
            {/* <h1 style={{textAlign: 'center'}}> */}
                <Typography variant='h2'>About Me</Typography>
              
            {/* </h1> */}
            {/* <h4 className='about-desc' style={{margin:'2vh', fontWeight: '100', lineHeight: '1.5'}}> */}
            <Typography variant='subtitle1'>
              Hi There! I'm a software engineer who would love to transform all of my fanatic ideas into reality.
              I am currently on track to graduate in May 2021, and would love to work at your company! I only
              have a couple internships worth of experience, but I have years of problem solving experience! Most
              of my experience is in languages like Javascript, and Full Stack Development, but I'm very motivated
              to learn more.
            </ Typography>
          </Paper>
            {/* </h4> */}
          {/* </div> */}
          </ Grid>
          </ Grid>
        {/* </div> */}
      </section>
    );
  }
}
 
export default About;