import React from "react"
import ProgressBar from './ProgressBar';
 
class SkillsTable extends React.Component {

  render() {
    return (
        <div id='skills-table' className='skills-table'>
          <table>
            <tbody>
              <tr>
                <td className='skill-name'> <span>Javascript</span> </td>
                <td><ProgressBar bgcolor='Lime' completed='100' /></td>
              </tr>
              <tr>
                <td className='skill-name'> <span>Java</span> </td>
                <td><ProgressBar bgcolor='Coral' completed='50' /></td>
              </tr>
              <tr>
                <td className='skill-name'> <span>Python</span> </td>
              <td><ProgressBar bgcolor='DarkTurquoise' completed='75' /></td>
              </tr>
              <tr>
                <td className='skill-name'> <span>C#</span> </td>
                <td><ProgressBar bgcolor='Chartreuse' completed='80' /></td>
              </tr>
              <tr>
                <td className='skill-name'> <span>C++</span> </td>
                <td><ProgressBar bgcolor='PeachPuff' completed='25' /></td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default SkillsTable;
