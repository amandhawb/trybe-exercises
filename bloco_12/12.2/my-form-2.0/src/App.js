import './App.css';
import React from 'react';
import Forms from './Forms';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <fieldset>
        <Forms />
        </fieldset>
      </div>
    );
  }
}

export default App;
