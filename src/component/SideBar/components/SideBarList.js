import {  Collapse,  ListItem as MuiListItem, ListItemButton as MuiListItemButton , ListItemIcon as MuiListItemIcon, List, Divider, Typography, Stack } from "@mui/material"
import { ActivitylogSvgIcon, AdminSvgIcon, BusinessesSvgIcon, DashboardSvgIcon, TransactionSvgIcon } from "../../../Assets/Icons/Icons"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';


import BasicModal from 'component/Modal/Modal'
import { Logout } from "pages/Logout";


const ListItem = styled(MuiListItem)(()=>({
  width: "215px",
  height:" 45px",
  }))

  const ListItemButton = styled(MuiListItemButton)(() => ({
    width: "215px",
    height:" 48px",
  '&:hover': {
      background:" #2D75B6",
    }
  }));
  
  
  const ListItemIcon = styled(MuiListItemIcon)(()=>({
      display: "flex",
      width:" 24px",
      height:" 24px",
      flexDirection:" column",
      justifyContent:" center",
      alignItems: "center",
      flexshrink: "0",
      minWidth:"55px",
      '&:hover': { 
        backgroundColor: "#fff", 
      } 
  }))

export const SideBarList = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);
 


    const [adminOpen, setAdminOpen] = useState(false);

  const toggleAdminMenu = () => {
    setAdminOpen(!adminOpen);
  };

    const navigate = useNavigate()
    return (
        <>
        <Stack spacing={2} sx={{height:"276"}}>
        <List >
          <ListItem  onClick={()=>{navigate("/")}}  >
              <ListItemButton >
                <ListItemIcon  >
                  <DashboardSvgIcon  />
                </ListItemIcon>
                <Typography variant="h6">Dashboard</Typography>
              </ListItemButton>
          </ListItem>

            <ListItem   onClick={()=>{navigate("/Transactions")}} >
              <ListItemButton >
                <ListItemIcon >
                  <TransactionSvgIcon />
                </ListItemIcon >
                <Typography variant="h6">Transactions</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem onClick={()=>{navigate("/Businesses")}}   >
              <ListItemButton >
                <ListItemIcon >
                 <BusinessesSvgIcon/>
                </ListItemIcon >
                <Typography variant="h6">Businesses</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem    onClick={toggleAdminMenu}   >
              <ListItemButton > 
                <ListItemIcon >
                 <AdminSvgIcon  />
                </ListItemIcon >
                <Typography variant="h6">Administration</Typography>
                {adminOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={adminOpen} timeout="auto" unmountOnExit >
              <div style={{display:"flex", paddingLeft:"55px"}}>
              <ListItem   onClick={()=>{navigate("/Administration/team-mate")}}>
              <Typography variant="h6">Team Mates</Typography>
              </ListItem>
              </div>
            
                <ListItem  onClick={()=>{navigate("/Administration/role")}} 
                sx={{display:"flex",paddingLeft:"65px"}} >
                <Typography variant="h6">Role and Previlleges</Typography>
              </ListItem>
           
          </Collapse>
            <ListItem    onClick={()=>{navigate("/Activitylog")}}>
              <ListItemButton>
                <ListItemIcon >
                <ActivitylogSvgIcon />
                </ListItemIcon >
                <Typography variant="h6">Activitylog</Typography>
              </ListItemButton>
            </ListItem>
            </List>
          </Stack>  
      
      <Stack spacing={2} sx={{marginTop:"60px"}}>
        <Divider sx={{ width:" 260px"}}/>       
        <List >
            <ListItem   onClick={()=>{navigate("/Settings")}} >
              <ListItemButton >
                <ListItemIcon >
                  <SettingsIcon />
                </ListItemIcon >
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
          <Logout />
          </BasicModal>
       </Stack>
        </>
    )
}