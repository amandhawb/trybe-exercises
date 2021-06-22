import React from 'react';

class Buttons extends React.Component {
  constructor() {
    super()
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }
    this.handleFirstButton = this.handleFirstButton.bind(this)
    this.handleSecondButton = this.handleSecondButton.bind(this)
    this.handleThirdButton = this.handleThirdButton.bind(this)
  }

  handleFirstButton(event) {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne +1
    }))
    if((this.state.clicksBtnOne + 1) %2 === 0) {
      event.target.style.backgroundColor = 'green'
    }
    else {
      event.target.style.backgroundColor = '#873d48'
    }
  }
  
  handleSecondButton(event) {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo +1
    }))
    if((this.state.clicksBtnTwo +1) %2 === 0) {
      event.target.style.backgroundColor = 'green'
    } else {
      event.target.style.backgroundColor = '#873d48'
    }
  }
  
  handleThirdButton(event) {
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree +1
    }))
    if((this.state.clicksBtnThree +1) %2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = '#873d48'
    }
  }
  render() {
    return (
      <div className='allButtons'>
        <button className='Buttons' onClick={this.handleFirstButton}>{this.state.clicksBtnOne}</button>
        <button className='Buttons' onClick={this.handleSecondButton}>{this.state.clicksBtnTwo}</button>
        <button className='Buttons' onClick={this.handleThirdButton}>{this.state.clicksBtnThree}</button>
      </div>
    );
  }
}

export default Buttons;