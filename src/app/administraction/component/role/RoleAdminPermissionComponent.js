
import { Container, Typography, Checkbox, FormControlLabel as MuiFormControlLabel,DialogTitle as MuiDialogTitle } from '@mui/material';
import styled from 'styled-components';

export const RoleAdminPermissions = () => {
//   const [canViewTransaction, setCanViewTransaction] = useState(false);
//   const [canExportTransaction, setCanExportTransaction] = useState(false);

//   const handleViewTransactionChange = (event) => {
//     setCanViewTransaction(event.target.checked);
//   };

//   const handleExportTransactionChange = (event) => {
//     setCanExportTransaction(event.target.checked);
//   };
// checked={canViewTransaction} onChange={handleViewTransactionChange}

const FormControlLabel = styled(MuiFormControlLabel)(() => ({
  
  }))
  const DialogTitle = styled(MuiDialogTitle)(()=>({
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
  }))

  return (
    <Container sx={{height:"521px"}} >
     <DialogTitle>Admins permissions</DialogTitle>
     <div style={{height:"390"}} >
      <FormControlLabel
        control={<Checkbox  />}
        label={<Typography style={{
            color:" #1A1C1F",
            fontFamily:"BR Firma",
            fontSize:"15px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"21px",
            width: "180px",
        }}>Can view transactions</Typography>}
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography style={{
            color:" #1A1C1F",
            fontFamily:"BR Firma",
            fontSize:"15px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"21px",
            width: "180px",
        }}>Can export transactions</Typography>}
        labelPlacement="end"
      />
       <FormControlLabel
        control={<Checkbox />}
        label={<Typography style={{
            color:" #1A1C1F",
            fontFamily:"BR Firma",
            fontSize:"15px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"21px",
            width: "180px",
        }}>Can view business</Typography>}
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography style={{
            color:" #1A1C1F",
            fontFamily:"BR Firma",
            fontSize:"15px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"21px",
            width: "180px",
        }}>Can generate API key</Typography>}
        labelPlacement="end"
      />
        <FormControlLabel
        control={<Checkbox />}
        label={<Typography style={{
            color:" #1A1C1F",
            fontFamily:"BR Firma",
            fontSize:"15px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"21px",
            width: "180px",
        }}>Can we withdrawal details</Typography>}
        labelPlacement="end"
      />

  <FormControlLabel
        control={<Checkbox />}
        label={<Typography style={{
            color:" #1A1C1F",
            fontFamily:"BR Firma",
            fontSize:"15px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"21px",
            width: "180px",
        }}>Can add new businesses</Typography>}
        labelPlacement="end"
      />
    <FormControlLabel
            control={<Checkbox />}
            label={<Typography style={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"15px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
            }}>Can export businesses</Typography>}
            labelPlacement="end"
        />

<FormControlLabel
            control={<Checkbox />}
            label={<Typography style={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"15px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
            }}>Can we invite new member</Typography>}
            labelPlacement="end"
        />
 
 <FormControlLabel
            control={<Checkbox />}
            label={<Typography style={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"15px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
            }}>Can remove exising member </Typography>}
            labelPlacement="end"
        />

<FormControlLabel
            control={<Checkbox />}
            label={<Typography style={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"15px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
            }}>Can we create role </Typography>}
            labelPlacement="end"
        />
    
    <FormControlLabel
            control={<Checkbox />}
            label={<Typography style={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"15px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
            }}>Can change role </Typography>}
            labelPlacement="end"
        />
    </div>
    </Container>
  );
};
 
