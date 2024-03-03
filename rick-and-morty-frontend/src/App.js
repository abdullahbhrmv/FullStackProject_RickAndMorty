import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EpisodeDetail from './components/EpisodeDetail';
import CharacterPage from './components/CharacterPage';
import FavoritesPage from './components/FavoritesPage';
import MenuBar from './components/MenuBar';

const App = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes/:id" element={<EpisodeDetail />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
