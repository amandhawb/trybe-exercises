import './App.css';
import React from 'react';
import TextArea from './TextArea';
import Choose from './Choose';
import Name from './Name';
import Age from './Age';
import Accept from './Accept';

class Forms extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      choose: '',
      name: '',
      age: '',
      text: '',
      accept: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Exercício de fixação:</h1>
        <h2 className='title'>Nos dê seu feedback!</h2>
        <form className='form'>
          <fieldset>
            <Choose value={this.state.choose} handleChange={this.handleChange}/>
            <Name value={this.state.name} handleChange={this.handleChange} />
            <Age value={this.state.age} handle={this.handleChange} />
            <TextArea value={this.state.text} handleChange={this.handleChange}/>
            <Accept value={this.state.accept} handleChange={this.handleChange} />
          </fieldset>
          <label>
            Insira seu arquivo aqui:
            <input type="file"/>
          </label>

        </form>
      </div>
    );
  }
}

export default Forms;