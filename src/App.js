import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='navContainer'>
            <div className='logo'><img src='image'></img></div>
            <div className='links'>
              <div>Product</div>
              <div>Use Cases</div>
              <div>Why funday.com</div>
              <div>Pricing</div>
              <div><button className='log-in'>Log in</button></div>
            </div>
          </div>
        </header>
        <body>
          <h1>A new way to manage your work</h1>
          <h4>Plan. Organize. Track. In one visual, collaborative space.</h4>
          <div className='emailContainer'>
            <div><input className="inputEmail"></input></div>
            <div><button className='create-account'>Create free account</button></div>
          </div>
        </body>

      </div>
    );
  }
}

export default App;

