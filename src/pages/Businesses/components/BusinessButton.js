import MuiButton from '@mui/material/Button';
import {  Typography, styled } from '@mui/material';
import BasicModal from '../../../component/Modal/Modal';
import { useState } from 'react';
import { BusinessButtonForm } from './BusinessButtonForm';

const Button = styled(MuiButton)(()=>({
  display:" flex",
  width: "169px",
  height: "48px",
  padding: "12px 24px",
  flexdirection: "column",
  justifycontent:" center",
  alignitems: "flex-start",
  gap: "10px",
  flexshrink: "0",
  borderradius: "4px",
  background:" #2D75B6",
  textTransform:"none"
  }));

export  const BusinesseButton = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);
 

  return (
    <>
      <Button color="primary" variant="contained" onClick={handleOpen} >
      <Typography variant='h6'>Add new business</Typography>
      </Button>
      <BasicModal open={open} handleClose={closeModal}>
        <BusinessButtonForm />
      </BasicModal>

    </>
  );

};
