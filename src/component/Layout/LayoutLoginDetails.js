import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from "Assets/Imgs/Tap.png"
import { Box, Stack } from '@mui/material';


export const LayoutLoginDetails = () => {
  return (
    <Stack spacing={2} >
        <Box sx={{
            width:" 48px",
            height: "26.95px",
            padding:"15px"
        }}>
        <img src={logo} alt='logo' />
        </Box>
        <Outlet />
    </Stack>
  );
};
