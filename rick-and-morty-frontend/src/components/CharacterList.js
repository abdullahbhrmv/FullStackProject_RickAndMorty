import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../redux/favoritesSlice';
import { Alert } from 'react-bootstrap';

const CharacterList = ({ characters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showMaxFavoritesAlert, setShowMaxFavoritesAlert] = useState(false);
  const favorites = useSelector(state => state.favorites.characters);
  const dispatch = useDispatch();

  const handleAddToFavorites = (character) => {
    const MAX_FAVORITES = 10;
    const isAlreadyAdded = favorites.some((favorite) => favorite.id === character.id);
    
    if (isAlreadyAdded) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } else if (favorites.length >= MAX_FAVORITES) {
      setShowMaxFavoritesAlert(true);
      setTimeout(() => setShowMaxFavoritesAlert(false), 2000);
    } else {
      dispatch(addToFavorites(character));
    }
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container mt-5">
      <h1>Rick & Morty Characters</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Character Search.."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {showAlert && (
        <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
          Already available in your Favorites!
        </Alert>
      )}
      {showMaxFavoritesAlert && (
        <Alert variant="danger" onClose={() => setShowMaxFavoritesAlert(false)} dismissible>
          You have exceeded the number of favorite character additions. You must remove another character from favorites.
        </Alert>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {characters.map((character) => (
          <div key={character.id} className="col">
            <div className="card h-100">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Gender: {character.gender}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToFavorites(character)}
                >
                  Add Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
