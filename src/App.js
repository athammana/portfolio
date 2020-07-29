import React from 'react';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      
      <div className='header'>
        <pre>About     Projects    Contact</pre>
      </div>
      <div className="overflow-wrap">
        <Intro />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
