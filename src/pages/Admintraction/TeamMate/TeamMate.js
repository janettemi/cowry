import {  Stack, Typography } from "@mui/material";



import { TeamMateButton } from "./components/TeamMateButton";
import { TeamMateTableComponent } from "./components/TeamMateTableComponent";


const drawerWidth = 34;

export const TeamMate =() => {

  return (
    <>
      <Stack spacing={2} sx={{ marginLeft:drawerWidth, marginTop:'90px' }}>
        <Stack direction={"row"} spacing={90}>
        <Typography variant="h5">Team mates</Typography>
         <TeamMateButton />
        </Stack>
         <TeamMateTableComponent />
      </Stack>
    </>
  );
}
