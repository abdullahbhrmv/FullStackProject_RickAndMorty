import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className={`btn btn-primary me-2 ${currentPage === 1 && 'disabled'}`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Önceki Sayfa
      </button>
      <span className="align-self-center">Sayfa {currentPage}</span>
      <button
        className="btn btn-primary ms-2"
        onClick={() => handleClick(currentPage + 1)}
      >
        Sonraki Sayfa
      </button>
    </div>
  );
};

export default Pagination;
