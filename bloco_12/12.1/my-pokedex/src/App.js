import React from 'react';
import './App.css';
import Buttons from './Buttons';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1> Pokedex </h1>
        <Buttons />
      </div>
    );
  }
}

export default App;
