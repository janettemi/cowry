import {  Stack, Typography } from "@mui/material"

import SettingVerticalTabs from "./compoents/SettingVerticalTabs"

export const Settings = () => {

const drawerWidth = 34;

    return (
        < Stack spacing={2}  sx={{marginLeft:drawerWidth,paddingTop:"90px" }}>
             <Typography variant="h5">Settings</Typography>
             <SettingVerticalTabs />
        </Stack>
        
    )

}
