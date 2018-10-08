import React, { Component } from 'react';
import DragnDrop from './Components/DragnDrop/DragnDrop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <dragContainer className="dragContainer">
          <DragnDrop />
        </dragContainer>


      </div>
    );
  }
}

export default App;
