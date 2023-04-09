import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getObject } from './services/api';
import ObjectDetail from './ObjectDetail';

function ObjectPage() {
  const { objectID } = useParams();
  const [object, setObject] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getObject(objectID);
        setObject(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [objectID]);

  return (
    <div>
      {object ? <ObjectDetail object={object} /> : <p>Loading...</p>}
    </div>
  );
}

export default ObjectPage;