import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

import { TranstionViewsMeun } from '../TransationMeun/TransationViewsMeun';


function createData(Businessname, totalamount, transtionid, dateandtime) {
  return {
    Businessname,
    totalamount,
    transtionid,
    dateandtime,
    moreicon: <TranstionViewsMeun />
  };
}

const rows = [
  createData('Lamata PLC.', "₦4,000,000.00", "#199-238-2953", "18/10/19 12:04 PM"),
  createData('Dangote PLC.', "₦4,000,000.00", "#199-238-2953", "18/10/19 12:04 PM"),
  createData('Dangote PLC.', "₦4,000,000.00", "#199-238-2953", "18/10/19 12:04 PM"),
  createData('Dangote PLC.', "₦4,000,000.00", "#199-238-2953", "18/10/19 12:04 PM"),
  createData('Dangote PLC.', "₦4,000,000.00", "#199-238-2953", "18/10/19 12:04 PM"),
];

const headCells = [
  { id: 'Businessname', disablePadding: true, label: 'BUSINESS NAME' },
  { id: 'totalamount', disablePadding: false, label: 'TOTAL AMOUNT' },
  { id: 'transtionid', disablePadding: false, label: 'TRANSACTION ID' },
  { id: 'dateandtime', disablePadding: false, label: 'DATE & TIME' },
  { id: 'moreicon', disablePadding: false, label: '' }
];

export default function TransactionTableComp() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id} align="left" padding={headCell.disablePadding ? 'none' : 'normal'}>
                  <TableSortLabel>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {headCell.label}
                    </Typography>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox inputProps={{ 'aria-labelledby': labelId }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.Businessname}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.totalamount}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.transtionid}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.dateandtime}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.moreicon}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
