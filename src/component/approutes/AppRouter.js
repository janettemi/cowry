// import React, { useState } from 'react';
// import { Drawer, List, ListItem,  ListItemText, Collapse } from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import Pagination from './next';

// export const AppRouter = () => {
//     const [adminOpen, setAdminOpen] = useState(false);
//     // const [roleOpen, setRoleOpen] = useState(false);
//     // const [teamOpen, setTeamOpen] = useState(false);
  
//     const toggleAdminMenu = () => {
//       setAdminOpen(!adminOpen);
//     }; 
  
   
  
//     return (
//         <>
//       <Drawer variant="permanent">
//         <List>
//           <ListItem button onClick={toggleAdminMenu}>
//             <ListItemText primary="Admin" />
//             {adminOpen ? <ExpandLess /> : <ExpandMore />}
//           </ListItem>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <RoleOptions /> {/* Render RoleOptions component */}
//           </List>
//         </Collapse>
//         </List>
//       </Drawer>
//       <Pagination />

//       </>
//     );
//   };import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import APIForm from '../../app/businesses/apiForm/ApiForm';

 export const  AppRouter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuOpen = (event, rowIndex) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(rowIndex);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleCheckboxChange = (event) => {
    // Handle checkbox change here
  };

  const handleMenuItemClick = (option) => {
    // Handle menu item click here
    console.log("Selected option:", option);
    handleMenuClose();
  };

  return (
    <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Checkbox</TableCell>
          <TableCell>Column 1</TableCell>
          <TableCell>Column 2</TableCell>
          <TableCell>Menu</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[...Array(5)].map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>
              <Checkbox onChange={handleCheckboxChange} />
            </TableCell>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
            <TableCell>
              <IconButton onClick={(event) => handleMenuOpen(event, rowIndex)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && selectedRow === rowIndex}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
              </Menu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <APIForm />
    </>
  );
};
