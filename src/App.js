import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Table name="Mesa 1" status="CLOSED" />
          <Table name="Mesa 2" status="OPEN" />
          <Table name="Mesa 3" status="WAITING" />
          <Table name="Mesa 4" status="CALLING" />
        </p>
      </div>
    );
  }
}

export default App;
