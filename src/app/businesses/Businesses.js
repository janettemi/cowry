import { Box, Typography,Toolbar,styled } from "@mui/material"
import SideBarMeun from "../../component/sidemeun/SideMeun"
import AppHeader from "../../component/appheader/AppHeader"
import InputBase from '@mui/material/InputBase';
import { SearchSvgIcon } from "../../assest/icons/CustomSvgIcon";
import { BusinessesExport } from "./BussinessesExport";
import BusinessesTableComponent from "./BusinessesTableComponent";
import { BusinessesAddNew } from "./businessesform/BussinessesNewForm";

const SearchContainer = styled("div")`
    display: flex;
    width: 160px;
    height: 20px;
    padding: 11px 25px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid #EFF1F4;
    margin: 1px 15px;
`;

const StyledInputBase = styled(InputBase)`
color: #1A1C1F;
font-family: BR Firma;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Businesses = () => {

    return (
   <Box >
   <AppHeader />
        <Box sx={{display:"flex"}}>
            <SideBarMeun />
            <Box component='main' sx={{flexGrow:1,p:3}}>
            <Toolbar />
        <Box sx={{display:"flex"}}>
             <Typography sx={{color: "#1A1C1F",
             fontFamily: "BR Firma",
             fontSize: "24px",
             fontStyle:" normal",
             fontWeight: "700",
             lineHeight:" normal",
             paddingTop:"8px"
            }}>Businesses</Typography>
         <SearchContainer>
            <SearchSvgIcon />
            <StyledInputBase placeholder="Search" />
         </SearchContainer>
         <Box sx={{display:"flex", marginLeft:"400px"}}>
               <BusinessesAddNew  />
         <Box sx={{marginLeft:"10px"}}>
         <BusinessesExport />
         </Box>
         </Box>
     </Box>
     <BusinessesTableComponent />
            </Box>
        </Box>
        </Box>
    )

};