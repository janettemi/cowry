import styled from 'styled-components';
import MuiButton from '@mui/material/Button';
import { ExportSvgIcon } from '../../assest/icons/CustomSvgIcon';
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

export   const BusinessesExport = () => {

  return (
    <StyledContainer>
      <Button sx={{textTransform:"none"}} >
       <ExportSvgIcon />
      <Typography sx={{
         color:"#000",
         fontFamily:" BR Firma",
         fontSize:" 11px",
         fontStyle:" normal",
         fontWeight:" 50",
         lineHeight: "normal",
    }}>Export csv</Typography>
      </Button>
    </StyledContainer>
  );
};