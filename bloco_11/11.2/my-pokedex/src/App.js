import React from 'react';
import './App.css';
import pokemons from './data';
import GaleriaDePokemon from './GaleriaDePokemon';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1> Pokedex </h1>
        <GaleriaDePokemon pokemonsList={pokemons} />
      </div>
    );
  }
}

export default App;
