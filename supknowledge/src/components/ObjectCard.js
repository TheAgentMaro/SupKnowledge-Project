import React from 'react';

function ObjectCard({ object, onSelectObject }) {
  const handleClick = () => {
    onSelectObject(object.objectID);
  };

  return (
    <div className="object-card" onClick={handleClick}>
      {object.primaryImage ? (
        <img src={object.primaryImage} alt={object.title} />
      ) : (
        <p>No Image</p>
      )}
      {object.title ? <h3>{object.title}</h3> : <p>No Title</p>}
      {object.artistDisplayName ? (
        <p>{object.artistDisplayName}</p>
      ) : (
        <p>No Artist Display Name</p>
      )}
    </div>
  );
}

export default ObjectCard;