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
import Typography from '@mui/material/Typography';

function createData(
  name,
  description,
  amount,
  dateTime,
  status,
  history
) {
  return {
    name,
    description,
    amount,
    dateTime,
    status,
    history
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{row.description}</TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.dateTime}</TableCell>
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
      
        <Collapse in={open} timeout="auto" unmountOnExit>
          
         </Collapse>
      </TableRow>
     
    </React.Fragment>
  );
}

const rows = [
  createData(
    "January payments 1",
    "January payments and settlements from transactions within Lagos",
    "₦4,000,000.00",
    "18/10/19 12:04 PM",
    "Successful",
    [{ date: "18/10/19", customerId: "C001", amount: "₦2,000.00" }]
  ),
  createData(
    "January payments 2",
    "January payments and settlements...",
    "₦4,000,000.00",
    "18/10/19 12:04 PM",
    "Successful",
    [{ date: "18/10/19", customerId: "C002", amount: "₦2,000.00" }]
  ),
  // Add more data rows as needed
];

export default function BusinessTransactionTable() {
  return (
    <>
      <Typography variant="h5" component="div" gutterBottom>
        Transactions Details
      </Typography>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Status</TableCell>
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
    </>
  );
}
