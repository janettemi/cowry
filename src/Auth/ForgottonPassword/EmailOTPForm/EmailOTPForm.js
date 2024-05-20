import React, { useState } from 'react';
import { Stack, TextField, Button, Typography, Box } from '@mui/material';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

export function EmailOTPForm() { 
  const [otp, setOTP] = useState('');

  const handleOTPChange = (event) => {
    const { value } = event.target;
    setOTP(value.replace(/\D/g, '').slice(0, 4)); // Allow only digits and limit length to 4
  };

  const handleVerify = () => {
    // Add verification logic here
    console.log('Verifying OTP:', otp);
  };

  // const handleResend = () => {
  //   // Add resend logic here
  //   console.log('Resending OTP...');
  // };
  
  
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Box sx={{ width: "101px",height:"101px", background: "#E8EEF4", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MarkEmailUnreadIcon fontSize="large" color="primary"  sx={{width:"48px", height:"48px"}}/>
      </Box>
      <Typography variant="h5">
        Check Your Email
      </Typography>
      <Typography variant="h2"   sx={{width:" 310px" ,height: "44px"}}>
        We have sent an OTP to your email address. Please enter OTP pin:
      </Typography>
      <Stack direction="row" spacing={1} sx={{width:"245px" ,height:" 50px"}}>
        {[1, 2, 3, 4].map((index) => (
          <TextField
            key={index}
            variant="outlined"
            inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
            value={otp[index - 1] || ''}
            onChange={handleOTPChange}
          />
        ))}
      </Stack>
      <Button variant="contained" color="primary" sx={{width:"334px", height:"48px", textTransform:'none'}}  onClick={handleVerify}>
        Verify
      </Button>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Didn't receive an OTP yet? Resend (1:59s)
      </Typography>
      {/* You can add a countdown timer for resend option */}
      {/* <Typography variant="body2" color="textSecondary" gutterBottom>
          Didn't receive an OTP yet? Resend ({timer} s)
      </Typography> */}
      {/* <Button variant="text" color="primary" onClick={handleResend}>
        Resend
      </Button> */}
    </Stack>
  );
}
