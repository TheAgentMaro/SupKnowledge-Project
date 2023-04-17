import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';
import SearchResults from './components/SearchResults';
import ObjectDetail from './components/ObjectDetail/ObjectDetail';
import Home from './Home';
import { searchObjects, getObjectDetails } from './services/api';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`
        );
        const { objectIDs } = await response.json();
        if (objectIDs && objectIDs.length) {
          const promises = objectIDs.slice(0, 10).map(async (objectID) => {
            const objectResponse = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
            );
            const objectData = await objectResponse.json();
            return objectData;
          });
          const results = await Promise.all(promises);
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    setSelectedObject(null);
  };

  const handleObjectSelect = (objectID) => {
    getObjectDetails(objectID)
      .then((object) => setSelectedObject(object))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="content-container">
        <div className="article-container">
          {selectedObject ? <ObjectDetail object={selectedObject} /> : <Home />}
          {loading ? (
            <p>Loading...</p>
          ) : searchResults.length ? (
            <SearchResults results={searchResults} onSelectObject={handleObjectSelect} />
          ) : (
            <p>No results found.</p>
          )}
        </div>
        <div className="advanced-search-container">
          <AdvancedSearch handleSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;