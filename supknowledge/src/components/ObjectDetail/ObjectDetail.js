import React from 'react';
import './ObjectDetail.css';

function ObjectDetail({ object }) {
  return (
    <div className="object-detail">
      <h2>{object.title}</h2>
      <img src={object.primaryImageSmall} alt={object.title} />
      <p>{object.artistDisplayName}</p>
      <p>{object.objectDate}</p>
      <p>{object.medium}</p>
      <p>{object.dimensions}</p>
      <p>{object.department}</p>
      <p>{object.objectName}</p>
      <p>{object.country}</p>
      <p>{object.culture}</p>
      <p>{object.period}</p>
      <p>{object.creditLine}</p>
    </div>
  );
}

export default ObjectDetail;