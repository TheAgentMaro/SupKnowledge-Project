import { useEffect, useState } from 'react';
import { getHighlights, getRandomObjectID } from './services/api';
import ObjectDetail from './components/ObjectDetail/ObjectDetail';
import './Home.css';

function Home() {
  const [highlightIDs, setHighlightIDs] = useState([]);
  const [randomObjectID, setRandomObjectID] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const highlights = await getHighlights();
        const randomID = await getRandomObjectID();
        setHighlightIDs(highlights);
        setRandomObjectID(randomID);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    // Add a scroll event listener to show/hide the scroll-to-top button
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleObjectSelect = async (objectID) => {
    try {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
      const data = await response.json();
      setSelectedObject(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    // Show the scroll-to-top button when the user scrolls down
    setShowScrollButton(window.pageYOffset > 300);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <h1 className="home-title">
        <span className="animated-text">
          Welcome to SupKnowledge !
        </span>
      </h1>
      <p className="home-description">
        <span className="animated-text">
          Explore our collection of art and artifacts from around the world.
        </span>
      </p>
      <h2 className="home-highlights-title">
        <span className="animated-text">
          Check the Highlights :
        </span>
      </h2>
      <ul className="home-highlights-list">
        {highlightIDs.map((id) => (
          <li key={id}>
            <button className="home-highlight-button" onClick={() => handleObjectSelect(id)}>Article {id}</button>
          </li>
        ))}
      </ul>
      {randomObjectID && (
        <p className="home-random-object">
          Feeling lucky?{' '}
          <br />
          <br />
          <button className="home-random-button" onClick={() => handleObjectSelect(randomObjectID)}>Click here to see a random painting.</button>
        </p>
      )}
      {selectedObject && <ObjectDetail object={selectedObject} />}
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={handleScrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
}

export default Home;
