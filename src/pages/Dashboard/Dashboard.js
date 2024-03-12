import { 
    Typography ,
    Stack,
   } from "@mui/material"


import { DashboardCardComp } from "./components/DashboardCardComp";
import DashboardTableComponent from "./components/DashboardTable";


const drawerWidth = 34;

export const Dashboard = () => {
   return (
       <>
       <Stack sx={{marginLeft:drawerWidth,paddingTop:"90px" }} spacing={2}>
       <Typography variant="h5">
           Welcome Back josh,
       </Typography>
       <DashboardCardComp />
       <DashboardTableComponent />
       </Stack>
       </>
   )

}