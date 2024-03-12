import styled from 'styled-components';
import MuiButton from '@mui/material/Button';
import { ExportSvgIcon } from '../../Assets/Icons/Icons';
import { Typography } from '@mui/material';

const StyledContainer = styled.div`
border-radius: 8px;
border: 1.5px solid #EFF1F4;
`;

const Button = styled(MuiButton)(()=>({
  display:" flex",
    height: "45px",
    padding: "5px 5px",
    justifyContent: "space-between",
    alignItems: "center",
    gap:" 8px",
  }))

export   const Export = () => {

  return (
    <StyledContainer>
      <Button sx={{textTransform:"none"}} >
       <ExportSvgIcon />
      <Typography variant='h6' sx={{color:"#000000",fontSize:" 11px"}}>Export csv</Typography>
      </Button>
    </StyledContainer>
  );
}