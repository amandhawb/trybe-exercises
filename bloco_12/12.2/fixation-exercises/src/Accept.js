import React from 'react';

class Accept extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Aceito compartilhar minhas informações:
        <input 
          name='accept'
          type='checkbox'
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Accept;