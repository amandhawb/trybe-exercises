import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon'>
        <p>Nome:{name}</p>
        <p>Tipo:{type}</p>
        <p>
          { `Average Weight:
          ${averageWeight.value}
          ${averageWeight.measurementUnit}`}
        </p>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
