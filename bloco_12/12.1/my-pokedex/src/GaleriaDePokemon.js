import React from 'react';
import Pokemon from './Pokemon';

class GaleriaDePokemon extends React.Component {
  render() {
    const { pokemonsList } = this.props;

    return (
      <div className='pokemon-list'>
        {pokemonsList.map((item) => <Pokemon pokemon={item} key={item.id} />)}
      </div>
    );
  }
}

export default GaleriaDePokemon;
