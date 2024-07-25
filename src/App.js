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
  const [selectedClassname, setSelectedClassname] = useState('App-header App-header__blue');

  function onSearchValueChanged(changeEvent) {
    setSearchValue(changeEvent.target.value);
  };

  const searchOptionsToRender = searchOptions.filter(option => option.option_label.toLowerCase().includes(searchValue.toLowerCase()));

  function onOptionSelect(option) {
    const selectedOptionId = option.option_id;
    if (selectedOptionId === 0) {
      setSelectedClassname('App-header App-header__blue');
    }
    if (selectedOptionId === 1) {
      setSelectedClassname('App-header App-header__red');
    }
    if (selectedOptionId === 2) {
      setSelectedClassname('App-header App-header__orange');
    }
    if (selectedOptionId === 3) {
      setSelectedClassname('App-header App-header__yellow');
    }
    console.log(selectedClassname);
  }

  return (
    <div className="App">
      <header className={selectedClassname}>
        <input className="App-header-search-field" value={searchValue} onChange={onSearchValueChanged} />
        <ul>
          {searchOptionsToRender.map(option =>
            <li className="App-header-search-option" key={option.option_id} onClick={() => onOptionSelect(option)}>
              {option.option_label}
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
