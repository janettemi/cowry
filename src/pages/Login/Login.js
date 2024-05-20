import { Button, Stack, Typography, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'Auth';

export const Login = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Stack spacing={2} sx={{ width: "412px", height: "364px", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ backgroundColor:" #D24339", borderRadius: '37.14px', padding: "10px" }}>
        <LogoutIcon sx={{ fontSize: '2rem', color: '#fff', }} />
      </Box>
      <Typography variant='h5' align="center">Log out</Typography>
      <Typography variant='h6' align="center">Are you sure you want to logout?</Typography>
      <Stack spacing={2}  sx={{ width: "334px" }}>
      <Button onClick={handleLogout} color="error" variant="contained"  sx={{ width: "334px",textTransform:"none" }}>
        Yes, Log out
      </Button>
      <Button  sx={{ width: "334px",textTransform:"none", background:"#fff" , border: "2px solid #2D75B6"}}>
        No, Cancel
      </Button>
      </Stack>
    </Stack>
  );
}