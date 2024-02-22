import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button key={i} onClick={() => goToPage(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      {renderPageButtons()}
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
