import React from "react";
import ProjectCard from './ProjectCard';

class Projects extends React.Component {

  /*
  TODO Add a json thing and then generate the table with that, and add a top to the heading
  */


  render() {
      return (
        <section id='projects' style={{position:'relative'}}>
          <div id='projectsbg' className='projects-background'/>
          <div className='project-cards'>
            <h1 style={{textAlign:'center', margin:'0px 0px 3vh', paddingTop:'1ch'}}>Projects</h1>
            <div className='project-card-grid'>
              <ProjectCard name='DocTour' src= {require('./ProjectImgs/DocTour.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour' text='Worked as a an Assistant Lead Engineer in an Agile team of 10 to deliver a fully functional hospital mapping kiosk application in 6 weeks. Spearheaded the Voice component that had the ability to completely control the application.'/>
              <ProjectCard name='New Zealand IQP' src= {require('./ProjectImgs/kiwi.png')} projlink='https://digitalcommons.wpi.edu/iqp-all/5615/' text='Filler Filler Filler'/>
              <ProjectCard name='Sailbot MQP' src={require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour' text='Filler Filler Filler'/>
              <ProjectCard name='Neural Net' src={require('./ProjectImgs/ocr.jpg')} projlink='https://github.com/athammana/neuralNet' text='Filler Filler Filler'/>
              <ProjectCard name='Routine App' src={require('./ProjectImgs/ppp.png')} projlink='https://github.com/athammana/WPIHack2019/' text='Filler Filler Filler'/>
            </div>
          </div>
        </section>
      )    
    }
}
 
export default Projects;