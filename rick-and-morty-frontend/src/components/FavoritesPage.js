import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/favoritesSlice';
import { Modal, Button } from 'react-bootstrap';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.characters);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(selectedCharacter.id));
    setShowConfirmationModal(false);
  };

  const openConfirmationModal = (character) => {
    setSelectedCharacter(character);
    setShowConfirmationModal(true);
  };

  return (
    <div className="container mt-5">
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favorites.map((character) => (
            <div key={character.id} className="col">
              <div className="card h-100">
                <img src={character.image} className="card-img-top" alt={character.name} />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">Species: {character.species}</p>
                  <p className="card-text">Status: {character.status}</p>
                  <p className="card-text">Gender: {character.gender}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => openConfirmationModal(character)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
      
      <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove {selectedCharacter?.name} from favorites?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemoveFromFavorites}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FavoritesPage;
