import MuiButton from '@mui/material/Button';
import {  Typography, styled } from '@mui/material';
import BasicModal from '../../modal/Modal';
import { useState } from 'react';
import { BusinessAddForm } from './BusinessesFormComponnet';

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
  }));

export  const BusinessesAddNew = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);
 

  return (
    <>
      <Button sx={{textTransform:"none"}}  color="primary" variant="contained" onClick={handleOpen} >
      <Typography sx={{
        color: "var(--Colours-White-100, #FFF)",
        fontFamily:" BR Firma",
        fontSize:" 15px",
        fontWeight:" 50",
        lineHeight: "18px",
    }}>Add new business</Typography>
      </Button>
    <BasicModal open={open} handleClose={closeModal}>
      <BusinessAddForm />
    </BasicModal>

    </>
  );

};
