import React from "react"
 
function About(props) {
  return (
    <section id='about'>
      <div className='left-card'>
        <div className='card'>
          <div id='aboutdesc' className='container'>
            Really am a huge go getter, always looking for the bread. 
            Hmu w some sick job details and Ill hook you up with some sick code
          </div>
        </div>
      </div>
      <div className='right-card card container'>
        <div id='skills table'>
          <table className='skills-table'>
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
          </table>
        </div>
      </div>
    </section>
  )
}
 
export default About;