import React, { useState } from 'react';
import styled from 'styled-components';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { SelectAppSvgIcon } from '../../../assest/icons/CustomSvgIcon';

const StyledContainer = styled.div`
border-radius: 8px;
border: 1.5px solid #EFF1F4;
`;

const Button = styled(MuiButton)(()=>({
    display:" flex",
    height: "45px",
    padding: "2px 5px",
    justifyContent: "space-between",
    alignItems: "center",
    gap:" 8px",
  }))
  

  

export   const Activity = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (selectedDate) => {
    console.log('Selected Date:', selectedDate);
    
    handleClose();
  };


  return (
    <StyledContainer>
      <Button onClick={handleClick}>
      <ChecklistIcon  sx={{color:"black"}}/>
      <Typography sx={{
        color:"#000",
        fontFamily:" BR Firma",
        fontSize:" 11px",
        fontStyle:" normal",
        fontWeight:" 50",
        lineHeight: "normal",
    }}>Activities</Typography>
    <SelectAppSvgIcon   />
      </Button> 
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDateSelect('all')}>All</MenuItem>
        <MenuItem onClick={() => handleDateSelect('stafflogin')}>Staff Login</MenuItem>
        <MenuItem onClick={() => handleDateSelect('passwordchange')}>Password change</MenuItem>
        <MenuItem onClick={() => handleDateSelect('changerole')}>Change role</MenuItem>
        <MenuItem onClick={() => handleDateSelect('changerole')}>Change role</MenuItem>
        <MenuItem onClick={() => handleDateSelect('generateapikey')}>Generate API key</MenuItem>
        <MenuItem onClick={() => handleDateSelect('regenrateapikey')}>Regenrate API key</MenuItem>
      </Menu>
    </StyledContainer>
  );
};
