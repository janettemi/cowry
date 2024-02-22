import { Box, InputBase, Toolbar, Typography } from "@mui/material";
import AppHeader from "../../../../component/appheader/AppHeader";
import SideBarMeun from "../../../../component/sidemeun/SideMeun";
import { SearchSvgIcon } from "../../../../assest/icons/CustomSvgIcon";
import styled from "styled-components";
import { ButtonInvite } from "./button/ButtonInvite";
import { TeamMateTable } from "./table/TeammateTable";

const drawerWidth = 30;

export const TeamMate =() => {

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

  return (
    <>
      <AppHeader />
      <div>
      <SideBarMeun />
      <Box component='main' sx={{flexGrow:1,p:3, marginLeft:drawerWidth }}>
            <Toolbar />
        <Box sx={{display:"flex"}}>
             <Typography sx={{color: "#1A1C1F",
             fontFamily: "BR Firma",
             fontSize: "24px",
             fontStyle:" normal",
             fontWeight: "700",
             lineHeight:" normal",
             paddingTop:"8px"
            }}>Team mates</Typography>
         <SearchContainer>
            <SearchSvgIcon />
            <StyledInputBase placeholder="Search" />
         </SearchContainer>
         <div style={{marginLeft:"500px" }}>
         <ButtonInvite />
         </div>
         </Box>
         <div style={{marginTop:"30px"}}>
         <TeamMateTable />
         </div>
      </Box>
      </div>

    </>
  );
}
