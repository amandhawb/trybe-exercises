import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Buttons extends React.Component {
  constructor() {
    super()
    this.handlePokemon = this.handlePokemon.bind(this);
    this.state = {
      indexPokemon: 0,
    };
  }

  handlePokemon() {
    console.log('clicou');
    this.setState((prevState) => ({
      indexPokemon: prevState.indexPokemon +1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePokemon}>Próximo botão</button>
        <Pokemon pokemon={pokemons[this.state.indexPokemon]} />
      </div>
    )
  }
}

export default Buttons;