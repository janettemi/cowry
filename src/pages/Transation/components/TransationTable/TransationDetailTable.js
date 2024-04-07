import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
 description,
 amount,
 dateandtime,
  status,
) {
  return {
description,
amount,
dateandtime,
 status,
history: [
  {
    date: '2020-01-05',
    customerId: '11091700',
    amount: 3,
  },
  {
    date: '2020-01-02',
    customerId: 'Anonymous',
    amount: 1,
  },
],
  };
}

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell  variant="h6" component="th" scope="row">
          {row.description}
        </TableCell>

        <TableCell align="left">
          <Typography  variant="h6">{row.amount}</Typography>
          </TableCell>

        <TableCell align="left">
          <Typography  variant="h6">{row.dateandtime}</Typography>
          </TableCell>

        <TableCell align="left">
          <Typography  variant="h6">{row.status}</Typography>
          </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <Typography component="th" scope="row">
                        {historyRow.date}
                      </Typography>
                      <Typography>{historyRow.customerId}</Typography>
                      <Typography align="right">{historyRow.amount}</Typography>
                      <Typography align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </Typography>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('January payments and settlements fromtransactions within Lagos', '₦4,000,000.00','18/10/19 12:04 PM','Successful'),
  createData('January payments and settlements...', '₦4,000,000.00','18/10/19 12:04 PM','Successful'),
  createData('January payments and settlements...', '₦4,000,000.00','18/10/19 12:04 PM','Successful'),
  createData('January payments and settlements...', '₦4,000,000.00','18/10/19 12:04 PM','Successful'),
];

export default function TransactionDetailTable() {
  return (
    <TableContainer >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant='h3'>DESCRIPTION</Typography></TableCell>
            <TableCell align="right"><Typography variant='h3'>AMOUNT</Typography></TableCell>
            <TableCell align="right" ><Typography variant='h3'>DATE & TIME</Typography></TableCell>
            <TableCell align="right"><Typography variant='h3'>STATUS</Typography></TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
