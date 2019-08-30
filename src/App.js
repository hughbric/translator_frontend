import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" render={props => (
            <h1>App</h1>
          )} />
          

          <Route path="/about" render={props => (
            <About />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
