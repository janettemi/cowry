import {  AppBar as MuiAppBar,  Toolbar ,Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextSvgIcon } from "../../assest/icons/CustomSvgIcon";
import { SelectAppSvgIcon } from "../../assest/icons/CustomSvgIcon";


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
    <div>
        <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
         <div style={{display:"flex", marginLeft:"900px" }}>
         <TextSvgIcon />
          <Typography variant="h6" noWrap component="div">
            Admin Name
          </Typography>
          <SelectAppSvgIcon />
         </div>
           
        </Toolbar>
      </AppBar>
    </div>
  )
}