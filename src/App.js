import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import Wizard from './component/Wizard/Wizard.jsx';
import Header from './component/Header/Header.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Dashboard />
        <Wizard/>
      </div>
    );
  }
}

export default App;
