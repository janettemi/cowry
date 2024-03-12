import React, { useState } from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    onPageChange(value);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        boundaryCount={2}
        showFirstButton
        showLastButton
        variant="outlined"
        shape="rounded"
      />
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
