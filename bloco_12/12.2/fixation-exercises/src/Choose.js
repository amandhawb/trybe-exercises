import './App.css';
import React from 'react'

class Choose extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return(
      <div>
        <label className='label-dropdown'>
          O que você achou do nosso atendimento:
        </label>

        <label>
          <select 
            className='dropdown' 
            name='choose' 
            value={value} 
            onChange={handleChange}>
            <option selected>Escolha aqui:</option>
            <option>Muito bom! =D </option>
            <option>Bom =)</option>
            <option>Ruim =(</option>
            <option>Péssimo D=</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Choose;