import React from 'react';
import ObjectCard from './ObjectCard';

const SearchResults = ({ results, onSelectObject }) => {
  return (
<div className="search-results">
  <h2>Search Results</h2>
  {results.length > 0 ? (
    <div className="row">
      {results.map((result) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={result.objectID}>
          <ObjectCard object={result} onSelectObject={onSelectObject} />
        </div>
      ))}
    </div>
  ) : (
    <p>No results found.</p>
  )}
</div>
  );
};

export default SearchResults;