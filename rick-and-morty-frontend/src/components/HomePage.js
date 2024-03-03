import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';
import SearchBar from './SearchBar'; // SearchBar bileşenini içe aktar

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]); // Arama sonuçlarını saklayacak state'i tanımla

  useEffect(() => {
    fetchEpisodes();
  }, [currentPage]);

  const fetchEpisodes = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
    setEpisodes(response.data.results);
    setSearchResults(response.data.results); // Tüm bölümleri başlangıçta arama sonuçları olarak ayarla
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Arama işlevselliği için fonksiyon
  const handleSearch = (searchTerm) => {
    const filteredEpisodes = episodes.filter(episode =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredEpisodes);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Rick & Morty Episodes</h1>
      {/* SearchBar bileşenini ekleyin ve handleSearch fonksiyonunu prop olarak geçirin */}
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {searchResults.map((episode) => (
          <div key={episode.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p className="card-text">Episode: {episode.episode}</p>
                <p className="card-text">Air Date: {episode.air_date}</p>
                <Link to={`/episodes/${episode.id}`} className="btn btn-primary">Detaylar</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default EpisodeList;
