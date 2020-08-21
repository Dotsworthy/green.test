import React from 'react';
import logo from './logo-r.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="login-container">
        <img src={logo} className="logo" alt="logo" />
        <h1>Example Login Screen</h1>
        <p>Getting started with Green.</p>
        
        <form className="login-form"> 
          <label>Email Address</label>
          <input type="text"></input>

          <div>
          <input className="login-checkbox" type="checkbox" id="device" name="device"></input>
          <label for="device">Remember this device</label>
          </div>
        
          <input className="login-button" type="submit" value="Sign In"></input>
        </form>
        
      </header>
    </div>
  );
}

export default App;
