import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {Task('Amandha')}
    </ol>
  );
}

export default App;
