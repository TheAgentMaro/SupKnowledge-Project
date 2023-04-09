import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
    const data = await response.json();
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        className="search-bar-input"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-bar-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;