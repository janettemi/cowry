import { Box, Typography,Toolbar,Button, Stack } from "@mui/material"


import { BackSvgIcon } from "Assets/Icons/Icons";
import TransactionDetailTable from "./components/TransationTable/TransationDetailTable";
import { useNavigate } from 'react-router-dom';
import { Export } from "component/Export/Export";

const drawerWidth= 34;
export const TransationDetails = () => {  
    
    const navigate = useNavigate(); 

    const handleClickBack= () => {
       navigate('/Transactions');
      };
    

    return (
    <>
            <Toolbar />
            <Stack spacing={2} sx={{marginLeft:drawerWidth, paddingTop:"18px"}}>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant="h5">#199-238-2953</Typography> 
                <Export />
            </Box>
            <Stack>
            <Button sx={{borderRadius: "4px",background: "#FAFAFA",width: "89px",height:" 29px",padding:" 4px, 17px, 4px, 15px",}}  onClick={handleClickBack}>
                <BackSvgIcon />
                <Typography variant="h6"sx={{color:" #000000",fontWeight: 600}} >Back</Typography>
            </Button>
            </Stack>
            <Typography variant="h5">Total Amount : ₦4,000,000.00</Typography> 
            <Stack spacing={2}>    
              <TransactionDetailTable />
            </Stack>
            </Stack>
           
    </>   
    )

}

