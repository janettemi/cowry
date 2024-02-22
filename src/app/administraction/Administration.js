import { Box } from "@mui/material"
import SideBarMeun from "../../component/sidemeun/SideMeun"
import AppHeader from "../../component/appheader/AppHeader";
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
//import { Role } from '../../app/administraction/component/role';
import { Role } from "./component/role";
export const Administration = () => {

    return (
        <>
        <AppHeader />
        <Box sx={{display:"flex"}}>
            <SideBarMeun />
            <Box component="main" sx={{ p: 2,flexGrow:1 }}>
          <Role />
           </Box>
       </Box>
        </>
    )

}