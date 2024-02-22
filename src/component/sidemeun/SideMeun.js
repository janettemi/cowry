import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MuiList from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import {styled} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box , Collapse } from '@mui/material';
import logo from '../../assest/icons/Tap.png'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { BusinessesSvgIcon ,
  AdminSvgIcon,
  ActivitylogSvgIcon,
  TransactionSvgIcon , 
  DashboardSvgIcon,
} from '../../assest/icons/CustomSvgIcon';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(() => ({
  flexshrink: 0,     
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    height:"1024px",
    background: "#F9FAFA",
  },
}))

const ListItem = styled(MuiListItem)(()=>({
  width: "100%",
  boxSizing:"border-box",
  padding:"1px 10px"
}))

const List = styled(MuiList)(()=>({
}))

const ListItemIcon = styled(MuiListItemIcon)(()=>({
    display: "flex",
    width:" 24px",
    height:" 24.001px",
    flexDirection:" column",
    justifyContent:" center",
    alignItems: "center",
    flexshrink: "0",
    minWidth:"55px"
}))
export default function SideBarMeun() {

  const [adminOpen, setAdminOpen] = React.useState(false);

  const toggleAdminMenu = () => {
    setAdminOpen(!adminOpen);
  };


    const navigate = useNavigate()

    const ListTextLayout = styled(ListItemText )`
`
    const StyledListItemButton = styled(ListItemButton)`
    width: 100px;
    height: 48px;
    flex-shrink: 0;
  && {
    &:hover {
      background-color:#2D75B6;
      color: white;
      width: 100px;
    }
  }
`;

  return (
    <Box 
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
    >
       <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            background: "#F9FAFA",
          }}
          open
        >
      
        <Toolbar>
      <img src={logo} alt='logo' />
        </Toolbar>
        <Divider />
        <List >
          <ListItem  onClick={()=>{navigate("/")}}  >
              <StyledListItemButton >
                <ListItemIcon  >
                  <DashboardSvgIcon  />
                </ListItemIcon>
                <ListTextLayout primary="Dashboard"/>
              </StyledListItemButton>
            </ListItem>

            <ListItem onClick={()=>{navigate("/Transactions")}} >
              <StyledListItemButton >
                <ListItemIcon >
                  <TransactionSvgIcon />
                </ListItemIcon >
                <ListTextLayout primary="Transactions" />
              </StyledListItemButton>
            </ListItem>

            <ListItem onClick={()=>{navigate("/Businesses")}} disablePadding  >
              <StyledListItemButton >
                <ListItemIcon >
                 <BusinessesSvgIcon />
                </ListItemIcon >
                <ListTextLayout primary="Businesses"/>
              </StyledListItemButton>
            </ListItem>

            <ListItem   onClick={toggleAdminMenu}  disablePadding  >
              <StyledListItemButton > 
                <ListItemIcon >
                 <AdminSvgIcon />
                </ListItemIcon >
                <ListTextLayout primary="Administration" />
                {adminOpen ? <ExpandLess /> : <ExpandMore />}
              </StyledListItemButton>
            </ListItem>
            <Collapse in={adminOpen} timeout="auto" unmountOnExit >
            <div style={{display:"flex", paddingLeft:"50px"}}>
            <ListItem  onClick={()=>{navigate("/Administration/team-mate")}}>
                <ListItemText primary="Team mates" />
            </ListItem>
            </div>
            <div>
            <ListItem   onClick={()=>{navigate("/Administration/role")}} 
             sx={{display:"flex",paddingLeft:"60px"}} >
            <ListItemText primary="Role and previlleges" />
          </ListItem>
            </div>
            </Collapse>
            <ListItem onClick={()=>{navigate("/Activitylog")}} disablePadding>
              <StyledListItemButton>
                <ListItemIcon >
                <ActivitylogSvgIcon />
                </ListItemIcon >
                <ListTextLayout primary="Activity log" />
              </StyledListItemButton>
            </ListItem>
            </List>
        <Box sx={{marginTop:"60px"}}>
        <Divider />
        <List >
            <ListItem onClick={()=>{navigate("/Settings")}} disablePadding>
              <StyledListItemButton >
                <ListItemIcon >
                  <SettingsIcon />
                </ListItemIcon >
                <ListTextLayout primary="Settings"/>
              </StyledListItemButton>
            </ListItem>
       
            <ListItem onClick={()=>{navigate("/Logout")}}disablePadding >
              <StyledListItemButton>
                <ListItemIcon >
                <LogoutIcon />
                </ListItemIcon >
                <ListTextLayout primary="Logout"/>
              </StyledListItemButton>
            </ListItem>
          </List>
        </Box>
        
          </Drawer>

      </Box>
  );
}