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
              <ProjectCard name='Sailbot MQP' src={require('./ProjectImgs/SailbotCropped.png')} projlink='https://github.com/cjburri/sailbot20-21' text='Working in an agile team to create an autonomous sailbot, that uses a combination of computer vision, environmental sensors, and sailing algorithms that would be able to sail for around 6 hours'/>
              <ProjectCard name='Unscramble!' src={require('./ProjectImgs/Unscramble.png')} projlink='https://a3-athammana.herokuapp.com/' style={{ marginTop: '15px', width: '12vw' }} text='Utilized NodeJS, Express, and MongoDB to create the Unscramble! game. It has a persistent leaderboard and uses oauth authentication'/>
              <ProjectCard name='Chess' src={require('./ProjectImgs/Chess.png')} projlink='https://a4-athammana.herokuapp.com/' style={{ marginTop: '15px', width: '10vw' }} text='Utilized ThreeJS to create completely functional 3d Chess game'/>
              <ProjectCard name="It's Raining Cows!" src={require('./ProjectImgs/RainingCows.png')} projlink='https://webware-final.herokuapp.com/' style={{ marginTop: '15px', width: '15vw' }} text='Utilized Phaser and Socket.io to create a multiplayer game where players can try to survive the sky falling on them while collecting stars, has a functional leaderboard and chat system'/>
            </div>
          </div>
        </section>
      )    
    }
}
 
export default Projects;