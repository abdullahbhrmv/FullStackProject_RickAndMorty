import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // Arama fonksiyonunu çağır ve kullanıcının girdiği anahtar kelimeyi geçir
    onSearch(event.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
