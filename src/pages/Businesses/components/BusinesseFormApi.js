import React, { useState } from 'react';
import { Button, DialogTitle as MuiDialogTitle, Link as MuiLink, TextField, Tooltip, DialogContent } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import styled from '@emotion/styled';
import BasicModal from '../../../component/Modal/Modal';
import { BusinessApiRestForm } from './BusinessApiRsetForm';

const DialogTitle = styled(MuiDialogTitle)(()=>({
  display: "flex",
  justifyContent: "center",
  color: "#23203D",
  textAlign: "center",
  fontFamily: "BR Firma",
  fontSize: "23px",
  fontStyle: "normal",
  fontWeight: "600;",
  lineHeight: "28px",
  letterSpacing: "-0.1px",
  marginTop: "10px"
}));

const Link = styled(MuiLink)(() =>({
  color: "#1A1C1F",
  fontFamily: "BR Firma",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "20px" ,
  letterSpacing: "-0.12px",
}));

export const BusinessApiForm= ({ handleClose, setIsModalOpen }) => {
  const [openRestApiForm, setOpenRestApiForm] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const handleResetApiKey = () => {
    handleClose();
    setOpenRestApiForm(true);
  };

  
  const handleCopyApiKey = () => {
    // Logic for copying the API key
  };

  return (
    <div style={{ height: "280px" }}>
      <DialogTitle>API Key</DialogTitle>
      <DialogContent>
        <div style={{ marginTop: "15px" }}>
          <TextField
            value={apiKey}
            fullWidth
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Link style={{ display: "flex", justifyContent: "end", textDecoration:'none' }}>
            <Tooltip title="Reset API Key">
              <div onClick={handleResetApiKey} style={{ cursor: 'pointer' }}>
                Reset API Key
              </div>
            </Tooltip>
          </Link>
          <BasicModal open={openRestApiForm} handleClose={() => setOpenRestApiForm(false)}>
            <BusinessApiRestForm />
          </BasicModal>
        </div>
        <div>
          <Button sx={{ marginTop: "40px", textTransform: "none" }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleCopyApiKey}
            startIcon={<FileCopyIcon sx={{ display: 'flex', justifyContent: 'end' }} />}
          >
            Copy API Key
          </Button>
        </div>
      </DialogContent>
    </div>
  );
};
