import './App.css';
import React from 'react'

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label className='label-name'>
        Digite seu nome:
        <input 
            type="text" 
            name='name' 
            value={value} 
            onChange={handleChange}
        />
    </label>
    );
  }
}

export default Name;