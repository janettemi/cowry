import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  description,
  amount,
  date$time,
  status,
) {
  return {
    description,
    amount,
    date$time,
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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& < *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell >{row.amount}</TableCell>
        <TableCell >{row.date$time}</TableCell>
        <TableCell>{row.status}</TableCell>
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Box size="small" aria-label="purchases">
                <Box>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <Box component="th" scope="row">
                        {historyRow.date}
                      </Box>
                      <Box>{historyRow.customerId}</Box>
                      <Box align="right">{historyRow.amount}</Box>
                    </TableRow>
                  ))}
                </Box>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
    </React.Fragment>
  );
}

const rows = [
  createData("January payments and settlements from transactions within Lagos","₦4,000,000.00","18/10/19 12:04 PM","Successful"),
  createData("January payments and settlements...","₦4,000,000.00","18/10/19 12:04 PM","Successful"),  
  createData("January payments and settlements from transactions within Lagos","₦4,000,000.00","18/10/19 12:04 PM","Successful"),
  createData("January payments and settlements from transactions within Lagos","₦4,000,000.00","18/10/19 12:04 PM","Successful"),
  createData("January payments and settlements from transactions within Lagos","₦4,000,000.00","18/10/19 12:04 PM","Successful"),
  createData("January payments and settlements from transactions within Lagos","₦4,000,000.00","18/10/19 12:04 PM","Successful"),
  createData("January payments and settlements from transactions within Lagos","₦4,000,000.00","18/10/19 12:04 PM","Successful"),
];

export default function TransactionsDetailsTable() {
  return (
    <TableContainer >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{
                color:" #1A1C1F",
                fontFamily: "BR Firma",
                fontSize:" 12px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "20px", /* 166.667% */
            }} align="left">DESCRIPTION</TableCell>
            <TableCell align="left" >AMOUNT</TableCell>
            <TableCell align="left">DATE&TIME</TableCell>
            <TableCell align="left">STATUS</TableCell>
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
