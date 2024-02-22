import React, { useState } from 'react';
import styled from 'styled-components';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CalenderSvgIcon, SelectAppSvgIcon } from '../../assest/icons/CustomSvgIcon';
import { Typography } from '@mui/material';

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

export   const TransactionsDateComponent = () => {
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
        <CalenderSvgIcon />
      <Typography sx={{
        color:"#000",
        fontFamily:" BR Firma",
        fontSize:" 11px",
        fontStyle:" normal",
        fontWeight:" 50",
        lineHeight: "normal",
    }}>Select date</Typography>
       <SelectAppSvgIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDateSelect('today')}>Today</MenuItem>
        <MenuItem onClick={() => handleDateSelect('thisWeek')}>This Week</MenuItem>
        <MenuItem onClick={() => handleDateSelect('last30Days')}>Last 30 Days</MenuItem>
        <MenuItem onClick={() => handleDateSelect('last90Days')}>Last 90 Days</MenuItem>
        <MenuItem onClick={() => handleDateSelect('customDate')}>Custom Date</MenuItem>
      </Menu>
    </StyledContainer>
  );
};


