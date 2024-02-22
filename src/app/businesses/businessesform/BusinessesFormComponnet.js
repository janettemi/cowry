import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormLabel,TextField, Typography ,Box} from '@mui/material';

 export const BusinessAddForm = ({handleClose, open}) => {


  const [formData, setFormData] = useState({
    businessName: '',
    businessCategory: '',
    businessAddress: '',
    contactName: '',
    contactAddress: '',
    contactPhone:'',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      businessName: '',
      businessCategory: '',
      businessAddress: '',
      contactName: '',
      contactAddress: '',
    });
    handleClose();
  };

  return (
   <>
        <DialogTitle  sx={{
            display:"flex",
            justifyContent:"center",
            color: "#23203D",
            textAlign:" center",
            fontFamily: "BR Firma",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight:" 600;",
            lineHeight: "28px",
            letterSpacing: "-0.1px",
        }}
        >Add New Business</DialogTitle>
        <DialogContent  >
          <FormControl sx={{width:"280px"}} >
                  <Typography
                  sx={{
                    color: "#1A1C1F",
                    fontFamily: "BR Firma",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "20px" ,
                    letterSpacing:" -0.12px"
                    }}
                  >Business name</Typography>

              <TextField
                    name="businessName"
                    flexshrink = "0"
                    borderadius=" 4px"
                    fullWidth
                    border=" 1px solid #EBEDEF"
                    value={formData.businessName}
                    onChange={handleChange}
                    size='small'
               />
                  <FormLabel sx={{
                    color: "#1A1C1F",
                    fontFamily: "BR Firma",
                    fontSize: "13px",
                    fontSyle:" normal",
                    fontWeight: "600",
                    lineHeight:" 20px",
                    letterSpacing:" -0.12px;"
                  }}>Business category</FormLabel>
              <TextField
                    name="businessCategory"
                    flexshrink = "0"
                    borderadius=" 4px"
                    border=" 1px solid #EBEDEF"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    size='small'
               />
                  <FormLabel
                  sx={{
                    color: "#1A1C1F",
                    fontFamily: "BR Firma",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "20px" ,
                    letterSpacing:" -0.12px"
                    }}
                  >Business address</FormLabel>
             
              <TextField
                    name="businessAddress"
                    flexshrink = "0"
                    borderadius=" 4px"
                    border=" 1px solid #EBEDEF"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    size='small'
               />
                  <FormLabel
                  sx={{
                    color: "#1A1C1F",
                    fontFamily: "BR Firma",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "20px" ,
                    letterSpacing:" -0.12px"
                    }}
                  >Contact’s name</FormLabel>
             
              <TextField
                    name="contactName"
                    flexshrink = "0"
                    borderadius=" 4px"
                    border=" 1px solid #EBEDEF"
                    value={formData.contactName}
                    onChange={handleChange}
                    size='small'
               />
            
                  <FormLabel
                  sx={{
                    color: "#1A1C1F",
                    fontFamily: "BR Firma",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "20px" ,
                    letterSpacing:" -0.12px"
                    }}
                  >Contact’s email</FormLabel>
             
              <TextField
                    name="contactAddress"
                    flexshrink = "0"
                    borderadius=" 4px"
                    border=" 1px solid #EBEDEF"
                    value={formData.contactAddress}
                    onChange={handleChange}
                    size='small'
               />
                  <FormLabel 
                  sx={{
                    color: "#1A1C1F",
                    fontFamily: "BR Firma",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "20px" ,
                    letterSpacing:" -0.12px"
                    }}
                  >Contact’s phone no</FormLabel>
             
              <TextField
                    name="contactPhone"
                    flexshrink = "0"
                    borderadius=" 4px"
                    border=" 1px solid #EBEDEF"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    size='small'
               />
            <Box  sx={{display:"flex", justifyContent:"center", paddingTop:"20px",textTransform:"none"}}>
            <Button onClick={handleSubmit} color="primary" variant="contained"  fullWidth>
            Add Business
          </Button>
            </Box>
            </FormControl>
        </DialogContent>
        

        </>
  );
};

