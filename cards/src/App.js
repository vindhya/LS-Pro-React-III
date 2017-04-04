import React, { Component } from 'react';
//import logo from './logo.svg';
import NavBar from './NavBar';
import Body from './Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
