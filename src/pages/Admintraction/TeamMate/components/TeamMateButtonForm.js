import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, DialogContent, DialogTitle, FormLabel as MuiFormLable, styled } from '@mui/material';

export const TeamMateButtonForm = () => {
 const FormLabel = styled(MuiFormLable)(()=>({
        color: "#1A1C1F",
        fontFamily: "BR Firma",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "20px" ,
        letterSpacing:" -0.12px"
 }))

  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const roles = ['Admin'];
  const assignees = ['User 1']; // Assuming a list of possible assignees

  const handleInvite = () => {
    // Handle form submission logic here
    console.log('Inviting:', { email, role, assignTo });
  };


  return (
    <div>
        <DialogTitle
        sx={{
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
        }}
        >Invite Team Mates</DialogTitle>
        <DialogContent >
    <div style={{
        marginTop:"10px"
    }}>
    <FormLabel>Email Address</FormLabel>     
     <TextField
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size='small'
      />
    </div>
    <div  style={{
        marginTop:"20px"
    }}>
    <FormLabel>Role</FormLabel>
      <TextField
        fullWidth
        placeholder='select role'
        select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        size='small'
      >
        {roles.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
    
    <div  style={{
        marginTop:"30px"
    }}>
    <FormLabel>Assign to</FormLabel>
      <TextField
        fullWidth
        placeholder='Select business'
        select
        value={assignTo}
        onChange={(e) => setAssignTo(e.target.value)}
        size='small'
      >
        {assignees.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
     <Button sx={{marginTop:"30px",textTransform:"none"}}
     fullWidth
     variant="contained"
     color="primary"
     onClick={handleInvite}>Send Invite</Button>
        </DialogContent>
    </div>
  );
};
