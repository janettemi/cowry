import React from 'react';
import { TextField, Button, Typography, Link, Stack } from '@mui/material';

function PasswordChangePage() {
  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{  Width: '334px', height:"334px", padding: '16px' }}>
        <Typography variant="h5" sx={{fontSize:"28px" , marginBottom: '20px' }} >
         Forgot your password?
        </Typography>
        <Typography variant="h6" sx={{ width:"326px",height:"55px"}}>
         Enter your email address and we'll send you a link to reset your password.
        </Typography>
        <form>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email" fontSize="20px">Email Address</label>
            <TextField id="email" type="email" variant="outlined" fullWidth size='small' />
          </div>
          <Button variant="contained" color="primary" fullWidth sx={{textTransform:"none"}}>
           Continue
          </Button>
          <div style={{ marginTop: '16px', textAlign: 'center'}}>
            <Link  href="#"  underline="none"  color="#50555E">Return to Log in</Link>
          </div>
        </form>
      </div>
    </Stack>
  );
}

export default PasswordChangePage;
