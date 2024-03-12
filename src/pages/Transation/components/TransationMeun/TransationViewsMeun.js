import { useState } from 'react';
import { IconButton,  } from '@mui/material';
import  { useNavigate } from 'react-router-dom';
import Menu  from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';

import { DetalisSvgIcon } from 'Assets/Icons/Icons';


const MenuItem = styled(MuiMenuItem)(()=>({
  fontFamily: "BR Firma",
  fontSize:" 14px",
  fontStyle: "normal",
  fontWeight:" 400",
  lineHeight: "normal",
  letterSpacing:" 0.28px"
}))


export const TranstionViewsMeun = (params) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = () => {
    navigate('/transation/TransationDetail');
    
    handleClose();
  };

  

  return (
    <>
     <IconButton onClick={handleClick}>
      <DetalisSvgIcon />
        </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDateSelect('')}>View more details</MenuItem>
      </Menu> 
  </>
  )
};
  
