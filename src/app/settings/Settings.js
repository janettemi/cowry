import { Box,  Link, List, ListItem, ListItemText, Toolbar,Typography} from "@mui/material"
import SideBarMeun from "../../component/sidemeun/SideMeun"
import AppHeader from "../../component/appheader/AppHeader";
import { useState } from "react";


export const Settings = () => {

    const [activeItem, setActiveItem] =useState(null);

    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };

    return (
        <>
        <AppHeader />
        <Box sx={{display:"flex"}}>
            <SideBarMeun />
            <Box component="main" sx={{ p: 2,flexGrow:1}}>
        <Toolbar /> 
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
             <Typography sx={{color: "#1A1C1F",
             fontFamily: "BR Firma",
             fontSize: "24px",
             fontStyle:" normal",
             fontWeight: "700",
             lineHeight:" normal",
             paddingTop:"8px"
            }}>Settings</Typography>
         </div>
         </Box>
         <div>
         <List component="nav">
      <ListItem  component={Link} to="/setting/profileinformation" onClick={() => handleItemClick('profile')}>
        <ListItemText primary="Profile Information" />
        {activeItem === 'profile' && <div style={{ borderLeft: '2px solid blue', height: '100%', position: 'absolute', left: 0 }}></div>}
      </ListItem>
      <ListItem component={Link} to="/setting/ChangePassword" onClick={() => handleItemClick('password')}>
        <ListItemText primary="Change Password" />
        {activeItem === 'password' && <div style={{ borderLeft: '2px solid blue', height: '100%', position: 'absolute', left: 0 }}></div>}
      </ListItem>
    </List>
           
         </div>
         
      </Box>
            </Box>
        </>
    )

}