import React, { useState } from 'react';
import { Button,  DialogTitle as MuiDialogTitle,  Link as MuiLink, TextField, Tooltip, DialogContent } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import styled from '@emotion/styled';
import BasicModal from '../../modal/Modal';
import { ApiRestForm } from './ApiRestForm';
// import { copyToClipboard } from 'utils'; // Assume a utility function for copying to clipboard

const DialogTitle = styled(MuiDialogTitle)(()=>({
  display:"flex",
  justifyContent:"center",
  color: "#23203D",
  textAlign:" center",
  fontFamily: "BR Firma",
  fontSize: "23px",
  fontStyle: "normal",
  fontWeight:" 600;",
  lineHeight: "28px",
  letterSpacing: "-0.1px",
  marginTop:"10px"
}))

const Link = styled(MuiLink)(() =>({
  color: "#1A1C1F",
  fontFamily: "BR Firma",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "20px" ,
  letterSpacing:" -0.12px",
}))

const APIForm = () => {
  const [apiKey, setApiKey] = useState(''); // State to store the API key
  const handleOpen = () => setApiKey(true);
  const closeModal = () => setApiKey(false);
 

  const handleCopyApiKey = () => {
  
  };

 
  return (
    <div style={{height:"280px"}}>
      <DialogTitle>API Key</DialogTitle>
      <DialogContent>
      <div style={{marginTop:"15px"}}> 
      <TextField
      value={apiKey}
      fullWidth
      onChange={(e) => setApiKey(e.target.value)}
      />
      <div style={{display:"flex", justifyContent:"end" }}>
      <Tooltip title="Reset API Key">
        <Link onClick={handleOpen} style={{ cursor: 'pointer' }}>
          Reset API Key
        </Link>
      </Tooltip>
      </div>
       <BasicModal open={apiKey} handleClose={closeModal}>
        <ApiRestForm />
       </BasicModal>
      </div>
      <div >
      <Button sx={{marginTop:"40px",textTransform:"none"}}
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleCopyApiKey}
        startIcon={<FileCopyIcon sx={{display:'flex',justifyContent:'end'}} />}
      >
        Copy API Key
      </Button>
      </div>
      </DialogContent>
    </div>
  );
};

export default APIForm;
