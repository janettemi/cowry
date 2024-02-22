import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { IconButton,styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BasicModal from '../../../../modal/Modal';
import { SummaryDetailsTeam } from '../SummaryDetailsTeam';

export const TeamMateMoreDetails = () => {
 const [anchorEl, setAnchorEl] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);
    
const MenuItem = styled(MuiMenuItem)(()=>({
    fontFamily: "BR Firma",
    fontSize:" 14px",
    fontStyle: "normal",
    fontWeight:" 400",
    lineHeight: "normal",
    letterSpacing:" 0.28px"
  }))

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    return(
        <div>
     <IconButton  onClick={handleClick} >
      <MoreHorizIcon />
     </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpen} >View more details</MenuItem>
      </Menu> 
      <BasicModal open={isModalOpen} handleClose={closeModal} >
        <SummaryDetailsTeam />
      </BasicModal>
        </div>
    )
}