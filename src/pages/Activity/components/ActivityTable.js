import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import Pagination from '../../../component/Pagination/Pagination';

export const ActivityTable = ({ data, rowsPerPage }) => {
  const columns = [
    { id: 'name', label: 'NAME', minWidth: 200 },
    { id: 'actiondetails', label: 'ACTION DETAILS', minWidth: 200 },
    { id: 'dateandtime', label: 'DATE & TIME', minWidth: 170 },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentRows = data ? data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) : [];

  const totalPages = data ? Math.ceil(data.length / rowsPerPage) : 0; 

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <Typography variant='h6' sx={{ fontWeight: 600 }}>
                    {column.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    <Typography variant='h6'>{row[column.id]}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data && <Pagination totalPages={totalPages} onPageChange={handlePageChange} />}
    </div>
  );
};
