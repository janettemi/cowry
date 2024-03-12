import { Box,  Stack,  Toolbar, Typography } from "@mui/material";


import { RoleButton } from "./components/RoleButton";
import { RoleCustomerCard } from "./components/RoleCustomerCard";
import { SearchComponent } from "component/SearchComponent";
 
  const drawerWidth = 33;

export const Role =() => {
  return (
    <>
    <Stack spacing={2} sx={{flexGrow:1, marginLeft:drawerWidth }}>
            <Toolbar />

        <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Box sx={{display:"flex"}}>
          <Typography variant="h5">Role and permission</Typography>
          <SearchComponent/>
          </Box>
         <RoleButton />
         </Box>
         <RoleCustomerCard />
      </Stack>
    </>
  );
}
