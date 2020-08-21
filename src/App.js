import React from 'react';
import logo from './logo-r.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="login-container">
        <img src={logo} className="logo" alt="logo" />

        <div className="title-container">
        <h1>Example login screen</h1>
        <p>Getting started with Green.</p>
        </div>
        
        <form className="login-form"> 
          <label>Email Address</label>
          <input className="login-textbox" type="text"></input>

          <div className="login-checkbox">
          <input type="checkbox" id="device" name="device"></input>
          <label for="device">Remember this device</label>
          </div>
        
          <input className="login-button" type="submit" value="Sign In"></input>
        </form>
        
      </header>
    </div>
  );
}

export default App;
