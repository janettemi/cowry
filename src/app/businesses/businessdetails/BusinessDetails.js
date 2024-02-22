import { Box, Typography,Toolbar,Button } from "@mui/material"
import AppHeader from "../../../component/appheader/AppHeader";
import SideBarMeun from "../../../component/sidemeun/SideMeun";
import { BusinessesExport } from "../BussinessesExport";
import { BackSvgIcon } from "../../../assest/icons/CustomSvgIcon";
import { useNavigate } from 'react-router-dom';


export const BusinessDetails = () => {  
    
    const navigate = useNavigate(); 

    const handleClickBack= () => {
        // Navigate to the "transitiondetails" component
       navigate('/Businesses');
      };
    

    return (
    <>
    <AppHeader />
        <Box sx={{display:"flex"}}>
        <SideBarMeun />
            <Box component='main' sx={{flexGrow:1,p:3, flexFlow:"0"}}>
            <Toolbar />
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography
               sx={{
                color: "#1A1C1F",
                fontFamily:" BR Firma",
                fontSize:" 24px",
                fontStyle: "normal",
                fontWeight:" 700",
                lineHeight: "normal",
               }}
                >Perry Holiday</Typography> 
                <BusinessesExport />
            </Box>
            <Button sx={{display:" display",borderRadius: "4px",background: "#FAFAFA"}}  onClick={handleClickBack}>
                <BackSvgIcon />
                <Typography 
                sx={{
                    color:" #000",
                    fontFamily: "BR Firma",
                    fontSize: "14px",
                    fontStyle:" normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                }}
                >Back</Typography>
            </Button>
            </Box>
        </Box>
    </>   
    )

}

