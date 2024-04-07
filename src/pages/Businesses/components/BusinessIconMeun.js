  import React, { useState } from 'react';
  import Menu from '@mui/material/Menu';
  import MuiMenuItem from '@mui/material/MenuItem';
  import { useNavigate } from 'react-router-dom';
  import { IconButton,styled } from '@mui/material';

  import { DetalisSvgIcon } from 'Assets/Icons/Icons'
  import { BusinessApiForm } from './BusinesseFormApi';
  import BasicModal from 'component/Modal/Modal';
  
  const MenuItem = styled(MuiMenuItem)(()=>({
    fontFamily: "BR Firma",
    fontSize:" 14px",
    fontStyle: "normal",
    fontWeight:" 400",
    lineHeight: "normal",
    letterSpacing:" 0.28px"
  }))
  
  export   const BusinesseIconMeun = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); 
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleViewSelect = () => {
      navigate('Detail');
      
      handleClose();
    };
  
    const handleOpen = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  
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
          <MenuItem onClick={() => handleViewSelect('')}>View more details</MenuItem>
          <MenuItem onClick={handleOpen} >Generate Api key</MenuItem>
        </Menu> 
        <BasicModal open={isModalOpen} handleClose={closeModal}  >
          <BusinessApiForm  handleClose={closeModal}  setIsModalOpen={setIsModalOpen}/>
        </BasicModal>
      </>
    );
  };
  
  
  