import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Articles from './components/Articles';
import About from './components/About';

import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

        {/* Routes */}
        <Route exact path="/component" component={Projects} />
        <Route path="/component/articles" component={Articles} />
        <Route path="/component/about" component={About} />

        <div className="navigation">
            {/* <img src={logo} className="logo" alt="Logo" /> */}
            <div className="navigation-sub">
                <Link to="/component" className="item">Projects</Link>
                <Link to="/component/articles" className="item">Articles</Link>
                <Link to="/component/about" className="item">About</Link>
                {/* <Projects></Projects>
                <Articles></Articles>
                <About></About> */}
            </div>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
