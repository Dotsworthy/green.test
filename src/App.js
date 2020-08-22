import React from 'react';
import logo from './public/logo-r.svg';

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
          <label className="email">Email Address</label>
          <input className="login-textbox" type="text"></input>

          <div className="login-checkbox">
          <label class="checkbox-label">
          <input type="checkbox"/>
          <span class="checkbox-custom"></span>      
          </label>
          <label>Remember this device</label>
          </div>
        
        <div className="login-submit">
          <input className="login-button" type="submit" value="Sign In"></input>
        </div>
        </form>
        
      </header>
    </div>
  );
}

export default App;
