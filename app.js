import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('characters.json')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div className="main-container">
      {characters.map(character => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
