import { Box,
     Typography ,
     Toolbar,
    } from "@mui/material"
import SideBarMeun from "../../component/sidemeun/SideMeun"
import AppHeader from "../../component/appheader/AppHeader"
import DashboardTableComponent from "./DashboardTableComponent";
import { CardContainer } from "./CardContainer";

const drawerWidth = 240

export const Dashboard = () => {
    return (
        <>
        <AppHeader />
        <Box sx={{display:"flex"}}>
            <SideBarMeun />
            <Box
             component="main"
             sx={{ flexGrow: 1, p: 1,marginTop:"3px", width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
        <Toolbar />
        <Typography variant="h5" sx={{
        color:" #1A1C1F",
        fontFamily:"BR Firma",
        fontSize:"24px",
        fontStyle:"normal",
        fontWeight:"700",
        lineHeight:"normal"
        }}>
            Welcome Back josh,
        </Typography>
       <CardContainer />
        <DashboardTableComponent />
      </Box>
            </Box>
        </>
    )

}