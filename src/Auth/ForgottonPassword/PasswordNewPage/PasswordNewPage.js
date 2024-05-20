import React, { useState } from 'react';
import { TextField, Button, Typography,  Stack, IconButton, InputAdornment } from '@mui/material';

export function PasswordNewPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [showCofirmPassword, setShowCofirmPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const handleTogglePasswordConfirmVisibility = () => {
    setShowCofirmPassword((prevConfirmPassword) => !prevConfirmPassword);
  };
  
  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{  Width: '334px', height:"334px", padding: '16px' }}>
        <Typography variant="h5" sx={{fontSize:"28px" , marginBottom: '20px' }} >
         Set a new password
        </Typography>
        <Typography variant="h6"sx={{ marginBottom: '15px'}}  >
         Enter a new password to access the settlement portal
        </Typography>
        <form>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="password" fontSize="20px">Password</label>
            <TextField id="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size='small'
            fullWidth
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <Typography variant='h6'>Show</Typography> : <Typography variant='h6' >Hide</Typography>}
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="password" fontSize="13px">Comfirm Password</label>
            <TextField id="password"
             type={showCofirmPassword ? "text" : "password"}
             variant="outlined"
             size='small'
             fullWidth
             InputProps={{
             endAdornment: (
                 <InputAdornment position="end">
                   <IconButton onClick={ handleTogglePasswordConfirmVisibility} edge="end">
                     {showCofirmPassword ? <Typography variant='h6'>Show</Typography> : <Typography variant='h6' >Hide</Typography>}
                   </IconButton>
                 </InputAdornment>
               )
             }}
            />
          </div>
          <Button variant="contained" color="primary" fullWidth sx={{textTransform:"none"}}>
           Change password
          </Button>
        </form>
      </div>
    </Stack>
  );
}
