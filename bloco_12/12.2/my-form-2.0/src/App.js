import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    
  }

  handleUpperCase(text) {
    text.toUpperCase();
  }
  render() {
    return (
      <div className="App">
        <fieldset>
          <h1>My form</h1>
          <label>Name:</label>
          <input type='text' maxLength='40' required/>
        </fieldset>
      </div>
    );
  }
}

export default App;

// import React from 'react';

// class Name extends React.Component {
//   render() {
//     return(
//       <div>
//         <input type='text'/>
//       </div>
//     )
//   }
// }

// export default Name;