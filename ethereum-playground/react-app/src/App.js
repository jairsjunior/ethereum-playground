import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TerminalWindow from './components/terminal/TerminalWindow';
import Home from './components/home/Home';

class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
          <Home />
      </div>
    );
  }
}

export default App;
