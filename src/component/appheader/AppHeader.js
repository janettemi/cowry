import {  AppBar as MuiAppBar,  Toolbar ,Typography as MuiTypography, Box, Divider, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextSvgIcon } from "../../Assets/Icons/Icons";
import { SelectAppSvgIcon } from "../../Assets/Icons/Icons";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar)(() => ({
  background:" var(--Colours-White-100, #FFF)",
    flexshrink: "0",
    boxShadow: "none",
}))

const Typography = styled(MuiTypography)(() => ({
  color:" #213336",
  fontFamily:" BR Firma",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight:" 400",
  lineHeight: "normal",
  marginLeft:"8px",
  marginTop:"5px"
}))


export default function AppHeader() {

  return (
    <Stack spacing={2}>
        <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`},
          ml: { sm: `${drawerWidth}px` },
        }}
      > 
        <Toolbar>
         <Box sx={{display:"flex", marginLeft:"900px" }}>
         <TextSvgIcon />
          <Typography variant="h6" noWrap component="div">
            Admin Name
          </Typography>
          <SelectAppSvgIcon />
         </Box>
        </Toolbar>
        <Divider sx={{marginTop:"6px" ,border: "1px solid #F9FAFA"}} />
      </AppBar>
    </Stack>
  )
}