import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {styled} from '@mui/material/styles';
import { Box, Stack} from '@mui/material';

import Tap from 'Assets/Imgs/Tap.png'
import { SideBarList } from './components/SideBarList'

const drawerWidth = 260;

const Drawer = styled(MuiDrawer)(() => ({
  flexshrink: 0,     
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    height:"1024px",
    background: "#F9FAFA",
  },
}))

export default function SideBar() {

  return (
    <Stack spacing={2} height={{}}
    component="nav"
    sx={{ width: { sm: drawerWidth },  flexShrink: { sm: 0 } }}
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
          <Box sx={{padding:"20px"}} >
          <img src={Tap} alt='logo' />
          </Box >
        </Toolbar>
        <SideBarList /> 
        </Drawer>

      </Stack>
  );
}