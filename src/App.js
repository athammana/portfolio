import React from 'react';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Intro from './components/Intro';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
      <div>
        {/* <div className='header'>
          Intro About Projects
        </div> */}
        <Navbar />
        <div className="overflow-wrap">
          {/* <Route exact path='/' component={Intro} />
          <Route path='/About' component={About} />
          <Route path='/Projects' component={Projects} /> */}
          <Intro />
          <About />
          <Projects />
        </div>
      </div>
  );
}

export default App;
