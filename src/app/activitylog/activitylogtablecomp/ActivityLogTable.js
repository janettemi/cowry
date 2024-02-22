import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow ,} from '@mui/material';


export const ActivityLogTable = () => {


  const columns = [
    { id: 'name', label: 'NAME', minWidth: 200 },
    { id: 'actiondetails', label: 'ACTION DETAILS', minWidth: 200 },
    {
      id: 'dateandtime',
      label: 'DATE & TIME',
      minWidth: 170,
     
    },
   
   
  ];
  
  function createData(
    name,
    actiondetails,
    dateandtime,
   
  ){
    
    return {name , actiondetails , dateandtime};
  }
  
  const rows = [
    createData('Temidayo Oluwaniyi', 'Assigned Z@gmail.com a Customer representative role', '18/10/19 12:04 PM',  ),
    createData('Temidayo Oluwaniyi', 'Changed password', '18/10/19 12:04 PM', ),
    createData('Temidayo Oluwaniyi', 'Signed in', '18/10/19 12:04 PM', ),
    createData('Temidayo Oluwaniyi', 'Assigned Z@gmail.com a Customer representative role', '18/10/19 12:04 PM',  ),
    createData('Temidayo Oluwaniyi', 'Assigned Z@gmail.com a Customer representative role', '18/10/19 12:04 PM',),
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
    <div>
       <TableContainer>
    <Table>
      <TableHead >
        <TableRow 
        // sx={{
        //   fontFamily:" BR Firma",
        //   fontSize: "12px",
        //   fontWeight:" 600",
        //   lineHeight:" 20px",
        //   letterSpacing:"0em",
        // }}
        >
          {columns.map((column) => (
            <TableCell key={column.id}>
              {column.label}
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
    </div>
    )
}