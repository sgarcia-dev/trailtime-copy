import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Home from './home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
