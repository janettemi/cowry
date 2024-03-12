import { Box, Typography, Stack } from "@mui/material"


import { Export } from "component/Export/Export";
import { SearchComponent } from "component/SearchComponent";
import  BusinessesTableComponent from "./components/BusinesseTableComp";
import { BusinesseButton } from "./components/BusinessButton";

const drawerWidth= 34;

export const Businesse = () => {

    return (
      <>    
       <Stack spacing={2}  sx={{marginLeft:drawerWidth, paddingTop:"90px"}}>
          <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex' }}>
                  <Typography variant="h5" sx={{ marginTop: '5px' }}>Businesses</Typography>
                  <SearchComponent/>
              </Box>
              <Stack direction="row" spacing={2} sx={{ display: 'flex',   marginLeft:"400px"}}>
                   <BusinesseButton />
                   <Export />
              </Stack>
            </Box>
            <Stack spacing={2}>
              <BusinessesTableComponent />
            </Stack>
       </Stack>
  
      </>
    )

};