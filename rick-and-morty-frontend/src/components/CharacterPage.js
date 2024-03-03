import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList'; 

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="container mt-5">
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharacterPage;
