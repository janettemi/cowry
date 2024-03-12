import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Stack, IconButton, InputAdornment } from '@mui/material';

export function SignInComponent() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{  Width: '334px', height:"334px", padding: '16px' }}>
        <Typography variant="h5" sx={{fontSize:"28px" , marginBottom: '20px' }} >
          Log in to your account
        </Typography>
        <form>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email" fontSize="20px">Email Address</label>
            <TextField id="email" type="email" variant="outlined" fullWidth size='small' />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="password">Password</label>
            <TextField id="password" 
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size='small'
              fullWidth
              InputProps={{
              endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <Typography variant='h3'>Show</Typography> : <Typography variant='h3' >Hide</Typography>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Button variant="contained" color="primary" fullWidth sx={{textTransform:"none"}}>
            Login
          </Button>
          <div style={{ marginTop: '16px', textAlign: 'center'}}>
            <Link  href="#"  underline="none"  color="#50555E">Forgot your password? Reset here</Link>
          </div>
        </form>
      </div>
    </Stack>
  );
}
