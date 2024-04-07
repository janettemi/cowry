import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';



import { TeamMateMeun } from './TeamMateMeun';
import { Typography } from '@mui/material';


export const TeamMateTableComponent = () => {
    
const TableCell = styled(MuiTableCell)(()=>({
     
}))
const columns = [
  { id: 'fullname', label: 'FULLNAME', minWidth: 200 },
  { id: 'email', label: 'EMAIL', minWidth: 200 },
  {
    id: 'role',
    label: 'ROLE',
    minWidth: 170,
   
  },
  {
    id: 'invitesend',
    label: '',
    minWidth: 170,
   
  },
  {
    id:'icon',
    label:'',
    minWidth: 100,
    sortable: false,
    renderCell: (params) => <TeamMateMeun {...params} />,
  },
];

function createData(
  fullname,
  email,
  role,
  invitesend,
  icon
){
  
  return {fullname , email, role,invitesend, icon};
}

const rows = [
  createData('invite sent', 't.oluwaniyi@gmail.com', 'Admin', 'Resend invite', ),
  createData('Temidayo Oluwaniyi', 't.oluwaniyi@gmail.com', 'Admin', ),
  createData('invite sent', 't.oluwaniyi@gmail.com', 'Admin'," Resend invite", ),
  createData('invite sent', 't.oluwaniyi@gmail.com', 'Admin', 'Resend invite', ),
  createData('Temidayo Oluwaniyi', 't.oluwaniyi@gmail.com', 'Admin',),
];


const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = ( newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

return (
  <TableContainer>
    <Table>
      <TableHead >
        <TableRow >
          {columns.map((column) => (
            <TableCell key={column.id}>
            <Typography variant='h3'> {column.label}</Typography> 
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow key={row.fullname}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} >
                    {column.renderCell ? column.renderCell({ row, value }) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
      </TableBody>
    </Table>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </TableContainer>
);
}; 
