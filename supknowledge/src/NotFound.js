import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Page Not Found 404</h1>
      <p>Page Not Found 404</p>
      <Link to="/home">Home</Link>
    </div>
  );
}

export default Home;