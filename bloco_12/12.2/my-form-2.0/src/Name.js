import React from 'react';

class Name extends React.Component {

  
  render() {
    const { value, handleOnChange, name} = this.props;
    return (
      <div className="App">
        <label>Name:</label>
          <input 
            type='text'
            maxLength='40'
            required
            value={value}
            name={name}
            onChange={handleOnChange}
          />
      </div>
    );
  }
}

export default Name;