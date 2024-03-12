import { Box, Typography,Button, Stack } from "@mui/material"


import { Export } from "component/Export/Export";
import { BackSvgIcon } from 'Assets/Icons/Icons'
import { useNavigate } from 'react-router-dom';
import { BusinessCardLayout } from "./BusinessCardLayout";
import BusinessTransactionTable from "./BusinessTransactionTable";



export const BusinessTransaction = () => {  
    
    const navigate = useNavigate(); 

    const handleClickBack= () => {
        // Navigate to the "transitiondetails" component
       navigate('/Businesses');
      };
    
      const drawerWidth= 34;

    return (
    <>
        <Stack spacing={2} sx={{marginLeft:drawerWidth, paddingTop:"90px"}}>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant="h5">Perry Holiday</Typography> 
                <Export />
            </Box>
            <Button sx={{display:" display",borderRadius: "4px",background: "#FAFAFA", width:'89px',height:"29px"}}  onClick={handleClickBack}>
                <BackSvgIcon />
                <Typography variant="h6" sx={{color:" #000000"}}>Back</Typography>
            </Button>
            <BusinessCardLayout />
            <BusinessTransactionTable />
        </Stack>
    </>   
    )

}
