import logo from './logo.svg';
import './App.css';

function App() {
  const searchOptions = [
    { option_id: 0, option_value: '#282c34' },
    { option_id: 1, option_value: 'red' },
    { option_id: 2, option_value: 'orange' },
    { option_id: 3, option_value: 'yellow' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <input className="App-header-search-field" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
