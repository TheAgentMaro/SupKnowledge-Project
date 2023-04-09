import React from 'react';
import ObjectCard from './ObjectCard';

const SearchResults = ({ results, onSelectObject }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.objectID}>
              <ObjectCard object={result} onSelectObject={onSelectObject} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;