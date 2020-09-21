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
              <ProjectCard name='DocTour' src= {require('./ProjectImgs/DocTour.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour' text='I will sacrifice my life for Pakistan'/>
              <ProjectCard name='New Zealand IQP' src= {require('./ProjectImgs/kiwi.png')} projlink='https://digitalcommons.wpi.edu/iqp-all/5615/' text='I will sacrifice my life for Pakistan'/>
              <ProjectCard name='Sailbot MQP' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour' text='I will sacrifice my life for Pakistan'/>
              <ProjectCard name='Neural Net' src= {require('./ProjectImgs/ocr.jpg')} projlink='https://github.com/athammana/neuralNet' text='I will sacrifice my life for Pakistan'/>
              <ProjectCard name='Routine App' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/athammana/WPIHack2019/' text='I will sacrifice my life for Pakistan'/>
            </div>
            
            {/* <table className='project-cards-table'>
              <tbody>
                <tr>
                  <td><ProjectCard name='Project1' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour'/></td>
                  <td><ProjectCard name='Project1' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour'/></td>
                  <td><ProjectCard name='Project1' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour'/></td>
                </tr>
                <tr>
                  <td><ProjectCard name='Project1' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour'/></td>
                  <td><ProjectCard name='Project1' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour'/></td>
                  <td><ProjectCard name='Project1' src= {require('./ProjectImgs/ppp.png')} projlink='https://github.com/CS3733-D20-Team-K/DocTour'/></td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </section>
      )    
    }
}
 
export default Projects;