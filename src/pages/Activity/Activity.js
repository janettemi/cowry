import React from 'react';
import { Box, Toolbar,Typography ,Stack} from "@mui/material"


import { SearchComponent } from 'component/SearchComponent';
import { ActivityFilterMenu } from './components/ActivityFilterMenu';
import { ActivityExport } from './components/ActivityExport';
import { ActivityTable } from './components/ActivityTable';
import { ActivityDate } from './components/ActivityDate';

const drawerWidth= 34

export const ActivityLog = () => {

    return (
        <>
        <Stack spacing={2} sx={{marginLeft:drawerWidth}}>
        <Toolbar /> 
        <Box sx={{display:"flex"}}>
            <Box sx={{display:"flex"}}>
             <Typography variant='h5'>Activity log</Typography>
              <SearchComponent />
            </Box>
         <Stack  direction="row" spacing={2} sx={{display:'flex', marginLeft:"260px"}}>
           <ActivityFilterMenu />
           <ActivityDate />
           <ActivityExport />
         </Stack>
         </Box>
         <ActivityTable />
        </Stack>

        </>
    )

}