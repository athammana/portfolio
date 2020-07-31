import React from "react"
import ProgressBar from './ProgressBar';
 
function SkillsTable(props) {
    return (
        <div id='skills-table'>
            <span>Javascript</span> <ProgressBar bgcolor='purple' completed='100' /> <br />
            <span>Python</span> <ProgressBar bgcolor='teal' completed='75' /> <br />
            <span>Java</span> <ProgressBar bgcolor='yellow' completed='60' /> <br />
            <span>C#</span> <ProgressBar bgcolor='brown' completed='50' /> <br />
            <span>C++</span> <ProgressBar bgcolor='gold' completed='25' /> <br />
        </div>
    );
}

export default SkillsTable;

//Old table
            /* <table className='skills-table'>
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Interest</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Javascript</td><td>10</td><td>10</td></tr>
                <tr><td>Python</td><td>8</td><td>7</td></tr>
                <tr><td>Java</td><td>6</td><td>10</td></tr>
                <tr><td>C#</td><td>4</td><td>9</td></tr>
              </tbody>
            </table> */