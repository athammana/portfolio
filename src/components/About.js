import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
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
            <h3 style={{textAlign: 'center'}}>
              What I've Done
            </h3>
            <PieChart style={{width:'40vw', height:'60vh', marginTop:'-12vh'}} radius='25' animate='True' 
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={(index) => ({
                fontSize: '4px',
                fontFamily: 'Montserrat',
              })}
              labelPosition={65}
              data={this.state.pieData}
            />
            {/* <Button style={{position:'fixed', cursor:'pointer', bottom:'5vh', right:'5vh', width:'40px', height:'40px', backgroundColor:'blue', borderRadius:'50%', border: '0px'}} onClick={this.break}/> */}

          </div>
          <div className=' right-card card container'>
            <h1 style={{textAlign: 'center'}}>
              Interest
            </h1>
            <h3 style={{textAlign: 'center', marginBottom:'5vh'}}>
              What I'd like to do
            </h3>
            <SkillsTable />
          </div>
        </div>
      </section>
    );
  }
}
 
export default About;