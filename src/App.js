import * as React from "react";
import {
 Routes,
  Route
} from "react-router-dom";


import { Logout } from "pages/Logout";
import Layout from 'component/Layout/Layout'
import { LayoutLoginDetails } from 'component/Layout/LayoutLoginDetails'
import { Dashboard } from "pages/Dashboard";
import { Settings } from "pages/Setting";
import { ActivityLog } from "./pages/Activity";
import { SettingProfileInfoForm } from "pages/Setting/compoents/SettingProfileInfoForm";
import { SettingChangePasswordForm } from "pages/Setting/compoents/SettingChangePasswordForm";
import { Transations } from "pages/Transation";
import { TransationDetails } from "pages/Transation/TransationDetails";
import { Businesse } from "pages/Businesses";
import { BusinessTransaction } from "pages/Businesses/BusinessTransactions/BusinessTransactions";
import { Role } from "pages/Admintraction/Role";
import { TeamMate } from "pages/Admintraction/TeamMate";
import { EmailOTPForm } from "pages/EmailOTPForm/EmailOTPForm";
import { SignInComponent } from "pages/SigInComponent/SigInComponent";
import PasswordChangePage from "pages/PasswordChangePage/PasswordChangePage";
import { PasswordNewPage } from "pages/PasswordNewPage/PasswordNewPage";


 const  App= ()=> {

  return (
    <Routes>
    <Route  element={<Layout />}>
    <Route path="/" element={<Dashboard />} />,
    <Route path='/ActivityLog' element= { <ActivityLog />} />,
    <Route path='/Transactions' element= { <Transations/>} />,
    <Route path='/Settings' element= { <Settings />} />,
    <Route path='/Businesses' element= { <Businesse />} />,
    <Route path='/Administration/team-mate' element= { <TeamMate />} />,
    <Route path='/Administration/role' element= { <Role />} />,
    <Route path='/transation/TransationDetail' element= { <TransationDetails />} />,
    <Route path='/business/businessDetail' element= {  <BusinessTransaction />} />,
    <Route path='/setting/profileinformation' element= { <SettingProfileInfoForm />} />,
    <Route path='/setting/ChangePassword' element= {<SettingChangePasswordForm />} />,
    <Route path='/logout' element= {<Logout />} />,
    </Route>



    <Route element={<LayoutLoginDetails />}>
    <Route path='/SignInPage' element= {  <SignInComponent />} />,
    <Route path='/CheckOTP' element= {< EmailOTPForm />} />,
    <Route path='/PasswordRest' element= {<PasswordChangePage /> } />,
    <Route path='/NewPassword' element= {<PasswordNewPage /> } />,
    </Route>
    </Routes>
  )
};
export default App;