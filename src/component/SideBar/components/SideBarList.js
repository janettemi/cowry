import { useState } from 'react';
import { Collapse, ListItem as MuiListItem, ListItemButton as MuiListItemButton, ListItemIcon as MuiListItemIcon, List, Divider, Typography, Stack } from "@mui/material";
import { ActivitylogSvgIcon, AdminSvgIcon, BusinessesSvgIcon, DashboardSvgIcon, TransactionSvgIcon } from "../../../Assets/Icons/Icons";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';



import BasicModal from 'component/Modal/Modal';
import { Login } from "pages/Login";

const ListItem = styled(MuiListItem)(({ theme }) => ({
  width: "215px",
  height: "48px",
  backgroundColor: "transparent", // Override default background color
  '&:hover': {
    backgroundColor: "transparent", // Override hover background color
  },
}));


const ListItemButton = styled(MuiListItemButton)(({ isActive }) => ({
  width: "215px",
  height: "45px",
  backgroundColor: isActive ? "#2D75B6 !important" : "initial",
  '& .MuiTypography-root, & .MuiSvgIcon-root': {
    color: isActive ? "#FFFFFF" : "inherit",
    borderRadius: "3px solid #ffff",
  },
}));


const ListItemIcon = styled(MuiListItemIcon)(() => ({
  display: "flex",
  width: "24px",
  height: "24px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: "0",
  minWidth: "55px",
  }
));

export const SideBarList = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const closeModal = () => setOpen(false);
  
    
    const [adminOpen, setAdminOpen] = useState(false);

  const toggleAdminMenu = () => {
    setAdminOpen(!adminOpen);
  };

  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (route) => {
    setActiveItem(route);
    navigate(route);
  };

  return (
    <>
      <Stack spacing={2} sx={{ height: "276" }}>
        <List>
          <ListItem >
            <ListItemButton onClick={() => handleItemClick("/dashboard")} isActive={activeItem === "/dashboard"}>
              <ListItemIcon>
                <DashboardSvgIcon />
              </ListItemIcon>
              <Typography variant="h6">Dashboard</Typography>
            </ListItemButton>
          </ListItem>
         
          <ListItem >
             <ListItemButton  onClick={() => handleItemClick("/transactions")} isActive={activeItem === "/transactions"} >
                 <ListItemIcon >
                  <TransactionSvgIcon />
                 </ListItemIcon >
                <Typography variant="h6">Transactions</Typography>
               </ListItemButton>
             </ListItem>

             <ListItem >
               <ListItemButton onClick={() => handleItemClick("/businesses")} isActive={activeItem === "/businesses"} >
                <ListItemIcon >
                 <BusinessesSvgIcon/>
                 </ListItemIcon >
                 <Typography variant="h6">Businesses</Typography>
               </ListItemButton>
             </ListItem>

              <ListItem onClick={toggleAdminMenu} sx={{ backgroundColor: activeItem === "/administration" ? '#2D75B6' : 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <AdminSvgIcon />
                  </ListItemIcon>
                  <Typography variant="h6">Administration</Typography>
                  {adminOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              <Collapse in={adminOpen} timeout="auto" unmountOnExit>
                <div style={{ display: "flex", paddingLeft: "64px" }}>
                  <ListItem onClick={() => handleItemClick("/administration/team-mate")} sx={{ color: activeItem === "/administration/team-mate" ? '#2D75B6' : 'inherit', cursor: 'pointer' }}>
                    <Typography variant="h6">Team Mates</Typography>
                  </ListItem>
                </div>
                <ListItem onClick={() => handleItemClick("administration/role")} sx={{ display: "flex", paddingLeft: "76px", color: activeItem === "administration/role" ? '#2D75B6' : 'inherit', cursor: 'pointer' }}>
                  <Typography variant="h6">Role and Previlleges</Typography>
                </ListItem>
              </Collapse>

            
            <ListItem  >
              <ListItemButton  onClick={() => handleItemClick("/activity-log")} isActive={activeItem === "/activity-log"}>
                <ListItemIcon >
                <ActivitylogSvgIcon />
                </ListItemIcon >
                <Typography variant="h6">Activitylog</Typography>
              </ListItemButton>
            </ListItem>
            </List>
          </Stack>  
 

      <Stack spacing={2} sx={{ marginTop: "60px" }}>
        <Divider sx={{ width: "260px" }} />
        <List>
          <ListItem >
            <ListItemButton onClick={() => handleItemClick("/settings")} isActive={activeItem === "/settings"}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography variant="h6">Settings</Typography>
            </ListItemButton>
          </ListItem>
        
        
          <ListItem  onClick={handleOpen} >
            <ListItemButton>
             <ListItemIcon >
                <LoginIcon />
             </ListItemIcon >
             <Typography variant="h6">Logout</Typography>
            </ListItemButton>
          </ListItem>
      </List>
      <BasicModal open={open} handleClose={closeModal}>
        <Login />
      </BasicModal>
   </Stack>
   </>
   )
};
