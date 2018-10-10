import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/login/';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />

          
          <Login />
        </header>
       

       
      </div>
    );
  }
}

export default App;
