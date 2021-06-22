import React from 'react';
import Name from './Name';
import Email from './Email';

class Forms extends React.Component {
  constructor() {
    super()
    this.handleUpperCase = this.handleUpperCase.bind(this)

    this.state = {
      name1: '',
      name2: '',
      email: '',

    }
  }

  handleUpperCase({ target }) {
    const { name, value } = target;
    this.setState({
      [name]:value.toUpperCase()
    });
  }
  
  render() {
    return (
      <div>
        <h1>My form</h1> 
        <Name value={this.state.name1} handleOnChange={this.handleUpperCase} name="name1" />
        <Email value={this.state.email}/>

      </div>
    )
  }
}

export default Forms;