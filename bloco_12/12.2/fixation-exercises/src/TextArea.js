import './App.css';
import React from 'react';

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label className='label-textarea'>
      Deixe sua mensagem para nós! =D
    <textarea 
      name='text' 
      value={value} 
      onChange={handleChange}>
    </textarea>
  </label>
    )
  }
}

export default TextArea;