import React, { Component } from 'react';

import './App.css';

import Clima from './components/Clima';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Previsão do Tempo ReactJs</h1>

        <div className="linha">
          <Clima></Clima>
        </div>

      </div>
    );
  }
}

export default App;
