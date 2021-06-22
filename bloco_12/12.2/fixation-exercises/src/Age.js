import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label className='label-age'>
        Digite a sua idade:
        <input 
          type='number'
          name='age'
          value={value}
          onChange={handleChange}
        />
    </label>
    );
  }
}
export default Age;