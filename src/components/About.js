import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import SkillsTable from './SkillsTable';
 
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
    

  render() {
    return (
      <section id='about'>
        <div id='aboutbg' className='about-background'/>
        <div className='about-content'>
          <div className='left-card card container'>
            Really am a huge go getter, always looking for the bread. 
            Hmu w some sick job details and Ill hook you up with some sick code
            {/* < data={this.state.pieData} /> */}
            <PieChart style={{width:'40vw', height:'60vh'}} radius='25' animate='True' labelPosition='20'
              // lineWidth={20}
              // paddingAngle={18}
              // rounded
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={(index) => ({
                // fill: this.state.pieData[index].color,
                fontSize: '4px',
                fontFamily: 'Montserrat',
              })}
              labelPosition={65}
              data={this.state.pieData}
            />
          </div>
          <div className=' right-card card container'>
            <SkillsTable />
          </div>
        </div>
      </section>
    );
  }
}
 
export default About;