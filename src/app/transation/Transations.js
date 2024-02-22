import { Box, Typography,Toolbar,styled,  InputBase} from "@mui/material"
import SideBarMeun from "../../component/sidemeun/SideMeun"
import AppHeader from "../../component/appheader/AppHeader"
import { SearchSvgIcon } from "../../assest/icons/CustomSvgIcon";
import { TransactionsDateComponent } from "./TransationsDateComponent";
import { TransactionsExport } from "./TransationsIconsExportComponent";
import TransactionsTableComponent from "./TransationsTableComponent";


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

const StyledTextareaBase = styled(InputBase)`
color: #1A1C1F;
font-family: BR Firma;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Transations = () => {

    return (
    <>
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
            }}>Transactions</Typography>
         <SearchContainer>
            <SearchSvgIcon />
            <StyledTextareaBase placeholder="Search" />
         </SearchContainer>
         <Box sx={{display:"flex", marginLeft:"400px"}}>
         <TransactionsDateComponent />
         <Box sx={{marginLeft:"10px"}}>
         <TransactionsExport/>
         </Box>
         </Box>
     </Box>
     <Box sx={{marginTop:"10px"}}>
        <TransactionsTableComponent />
     </Box>
            </Box>
        </Box>
    </>   
    )

}

