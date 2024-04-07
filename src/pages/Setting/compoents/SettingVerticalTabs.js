import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import { SettingProfileInfoForm } from './SettingProfileInfoForm';
import { SettingChangePasswordForm } from './SettingChangePasswordForm';


const Tab = styled(MuiTab)(()=>({
  fontFamily: "BR Firma",
  fontSize: "13px",
  fontWeight: "600",
  lineHeight: "20px",
  letterSpacing: "-0.11999999731779099px",
  textAlign: "left"
  
  }));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}
      >
        <Tab label="Profile Information"/>
        <Tab label="Change Password"  />
      </Tabs>
      <Box sx={{marginTop:'-50px'}}>
      <TabPanel value={value} index={0}>
        <SettingProfileInfoForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <SettingChangePasswordForm />
      </TabPanel>
      </Box>
    </Box>
  );
}