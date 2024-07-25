import './App.css';
import { useState } from "react";

function App() {
  const [searchOptions, setSearchOptions] = useState([
    { option_id: 0, option_label: 'Blue', option_value: '#282c34' },
    { option_id: 1, option_label: 'Red', option_value: 'red' },
    { option_id: 2, option_label: 'Orange', option_value: 'orange' },
    { option_id: 3, option_label: 'Yellow', option_value: 'yellow' }
  ]);
  const [searchValue, setSearchValue] = useState('');

  function onSearchValueChanged(changeEvent) {
    setSearchValue(changeEvent.target.value);
  };

  const searchOptionsToRender = searchOptions.filter(option => option.option_label.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="App">
      <header className="App-header">
        <input className="App-header-search-field" value={searchValue} onChange={onSearchValueChanged} />
        <ul>
          {searchOptionsToRender.map(option =>
            <li key={option.option_id}>
              {option.option_label}
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
