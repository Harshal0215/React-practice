import { useState } from 'react'
import './App.css'
import { ResultsList } from './ResultList';
import SearchBar from './SearchBar';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <ResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;