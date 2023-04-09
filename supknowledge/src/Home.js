import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHighlights } from './services/api';
import './Home.css';

const Home = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getHighlights();
      setHighlights(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1 className="home-title">Metropolitan Museum of Art</h1>
      <h2 className="home-subtitle">Highlights</h2>
      <div className="highlights">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="highlight">
            <Link to={`/object/${highlight.id}`}>
              <img src={highlight.primaryImageSmall} alt={highlight.title} />
              <div className="highlight-caption">
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-department">{highlight.department}</p>
                <p className="highlight-period">{highlight.period}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;