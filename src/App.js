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
        <form>
        <label>Email Address</label>
        <input type="text"></input>
        <input type="checkbox"></input>
        <input type="submit" value="Sign In"></input>
        </form>
        
      </header>
    </div>
  );
}

export default App;
