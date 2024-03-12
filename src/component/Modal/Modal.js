import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  flexshrink:" 0",
  bordeRadius:"6px",
  background: "var(--Colours-White-100, #FFF)",
  boxShadow:" 0px 2px 6px 0px rgba(0, 0, 0, 0.10)",
};

export default function BasicModal({open ,handleClose ,children}) {
  
 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <IconButton
        disableRipple
        onClick={handleClose}
        sx={{position:"absolute",bottom:"101%", left:"93%", background:'#fff', width:"20px", height:"20px"}}>
        <CloseIcon sx={{width:"15px", height:"15px"}} />
       </IconButton>
        {children}
        </Box>
      </Modal>
    </div>
  );
}