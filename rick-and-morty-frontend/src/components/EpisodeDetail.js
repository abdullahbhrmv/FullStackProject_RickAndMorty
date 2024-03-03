import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './CharacterList'; 

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const episodeResponse = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setEpisode(episodeResponse.data);

        const characterUrls = episodeResponse.data.characters;
        const charactersResponse = await Promise.all(characterUrls.map(url => axios.get(url)));
        setCharacters(charactersResponse.map(response => response.data));
      } catch (error) {
        console.error('Error fetching episode:', error);
      }
    };

    fetchEpisode();
  }, [id]);

  return (
    <div className="container mt-5">
      {episode ? (
        <div>
          <h2>{episode.name}</h2>
          <p>Episode: {episode.episode}</p>
          <p>Air Date: {episode.air_date}</p>
          <h3>Characters</h3>
          <CharacterList characters={characters} />
        </div>
      ) : (
        <p>Loading episode...</p>
      )}
    </div>
  );
};

export default EpisodeDetail;
