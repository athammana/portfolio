import React from 'react';
// import ReactDOM from 'react-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './App.css';
// import { Button } from 'react-scroll';

class App extends React.Component {
  


  render() {
    return (
        <div>
          <Navbar />
          <div className="overflow-wrap">
            <Intro />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
    );
  }
}

export default App;
