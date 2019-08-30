import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import AddTerm from './components/AddTerm';
import About from './components/pages/About';
import TerminologyList from './components/TerminologyList';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
   translations: []
  }

  componentDidMount() {
    axios.get('https://trans-late.herokuapp.com/').then(res => this.setState({ translations: res.data.data }))
  }

  // Add Term
  addTerm = (term) => {
    axios.post('https://trans-late.herokuapp.com/terms', {
      term
    }).then(res => this.setState({ translations: [...this.state.translations, res.data.data] }));
  }

  // Delete Term
  delTerm = (id) => {
    axios.delete(`https://trans-late.herokuapp.com/terms/${id}`)
      .then(res => this.setState({ translations: [...this.state.translations.filter(term => term.id !== id)] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTerm addTerm={this.addTerm} />

              <div style={getStyle}>
                <p style={{flex: '1'}}>Term</p>
                <p style={{flex: '1.1'}}>Pig-Latin</p>
              </div>  

              <TerminologyList translations={this.state.translations} delTerm={this.delTerm} />
            </React.Fragment>
          )} />
          <Route path="/about" render={props => (
            <About />
          )} />
        </div>
      </Router>
    );
  }
}

const getStyle = {
  display: 'flex',
  fontSize: '30px',
  fontWeight: 'bold',
}

export default App;
