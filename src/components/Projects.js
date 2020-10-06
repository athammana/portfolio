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
              <ProjectCard name='DocTour' src= {require('./ProjectImgs/DocTour.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour' text='Worked as a an Assistant Lead Engineer in an Agile team of 10 to deliver a hospital kiosk map application in 6 weeks, and spearheaded Voice Control for the application'/>
              <ProjectCard name='New Zealand IQP' src= {require('./ProjectImgs/kiwi.png')} projlink='https://digitalcommons.wpi.edu/iqp-all/5615/' text="Collaborated in an interdisciplinary team of students to assist the ecosanctuary in measuring the city's perception on the increasing amount of birdlife around them, using many different research techniques"/>
              <ProjectCard name='Sailbot MQP' src={require('./ProjectImgs/SailbotCropped.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour' text='Working in an agile team to create an autonomous sailbot, that uses a combination of computer vision, environmental sensors, and sailing algorithms that would be able to sail for around 6 hours'/>
              <ProjectCard name='Neural Net' src={require('./ProjectImgs/ocr.jpg')} projlink='https://github.com/athammana/neuralNet' text='Used Keras and numpy to develop a handwritten number classifier'/>
              <ProjectCard name='Routine App' src={require('./ProjectImgs/android.jpg')} projlink='https://github.com/athammana/WPIHack2019/' text='Utilized Android Studio and Java to develop an improved morning routine alarm clock app, that created the alarms dynamically'/>
            </div>
          </div>
        </section>
      )    
    }
}
 
export default Projects;