import React from 'react';
import { Box, Toolbar,Typography,InputBase,styled} from "@mui/material"
import SideBarMeun from "../../component/sidemeun/SideMeun"
import AppHeader from "../../component/appheader/AppHeader";
import { SearchSvgIcon } from "../../assest/icons/CustomSvgIcon";
import { ActivityDate } from './activityboxcomp/ActivityDate';
import { Activity } from './activityboxcomp/Activity';
import { ActivityExport } from './activityboxcomp/ActivityExport';
import { ActivityLogTable } from './activitylogtablecomp/ActivityLogTable';

export const ActivityLog = () => {

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

    return (
        <>
        <AppHeader />
        <Box sx={{display:"flex"}}>
            <SideBarMeun />
            <Box component="main" sx={{ p: 2,flexGrow:1}}>
        <Toolbar /> 
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
             <Typography sx={{color: "#1A1C1F",
             fontFamily: "BR Firma",
             fontSize: "24px",
             fontStyle:" normal",
             fontWeight: "700",
             lineHeight:" normal",
             paddingTop:"8px"
            }}>Activity log</Typography>
            <SearchContainer>
            <SearchSvgIcon />
            <StyledTextareaBase placeholder="Search" />
         </SearchContainer>
         </div>
         <div style={{display:"flex",justifyContent:"space-around"}}>
           <div> <Activity /></div>
           <div> <ActivityDate /></div>
           <div> <ActivityExport /></div>
         </div>
         </Box>
         <div style={{marginTop:"20px"}}>
         <ActivityLogTable />
         </div>
      

      </Box>
            </Box>
        </>
    )

}