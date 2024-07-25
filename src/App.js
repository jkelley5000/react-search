import logo from './logo.svg';
import './App.css';

function App() {
  const searchOptions = [
    { option_id: 0, option_label: 'Blue', option_value: '#282c34' },
    { option_id: 1, option_label: 'Red', option_value: 'red' },
    { option_id: 2, option_label: 'Orange', option_value: 'orange' },
    { option_id: 3, option_label: 'Yellow', option_value: 'yellow' }
  ];
  const searchOptionsList = searchOptions.map(option => {
    <li key={option.option_id}>
      {option.option_label}
    </li>
  });

  return (
    <div className="App">
      <header className="App-header">
        <input className="App-header-search-field" />
      </header>
    </div>
  );
}

export default App;
