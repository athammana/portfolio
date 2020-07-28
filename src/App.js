import React from 'react';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Intro from './components/Intro';

function App() {
  return (
    <div className="overflow-wrap">
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
