import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';
import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';
import ObjectDetail from './components/ObjectDetail/ObjectDetail';
import Home from './Home';
import { searchObjects, getObjectDetails } from './services/api';
import './App.css';

function App() {
  const [objectIDs, setObjectIDs] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  async function handleSearch(query) {
    const objectIDs = await searchObjects(query);
    setObjectIDs(objectIDs);
  }

  async function handleObjectSelect(objectID) {
    const object = await getObjectDetails(objectID);
    setSelectedObject(object);
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="content-container">
        <div className="article-container">
          {selectedObject ? <ObjectDetail object={selectedObject} /> : <Home />}
          <ArticleDisplay objectIDs={objectIDs} onObjectSelect={handleObjectSelect} />
        </div>
        <div className="advanced-search-container">
          <AdvancedSearch onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;