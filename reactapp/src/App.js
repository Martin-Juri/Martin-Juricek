import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Martin Juricek</h1>
        </header>
          <p className="App-intro">My personal profile</p>
          <ul className="ListOfDetails">
              <li><a href="https://www.linkedin.com/in/martin-juricek-549168154/">LinkedIn Profile</a></li>
          </ul>
      </div>
    );
  }
}

export default App;