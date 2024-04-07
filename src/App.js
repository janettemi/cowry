import * as React from "react";
import {
 Routes,
  Route
} from "react-router-dom";



import Layout from 'component/Layout/Layout'
import { LayoutLoginDetails } from 'component/Layout/LayoutLoginDetails'
import { Dashboard } from "pages/Dashboard";
import { Settings } from "pages/Setting";
import { ActivityLog } from "pages/Activity";
import { Transations } from "pages/Transation";
import { TransationDetails } from "pages/Transation/TransationDetails";
import { Businesse } from "pages/Businesses";
import { BusinessTransaction } from "pages/Businesses/BusinessTransactions/BusinessTransactions";
import { Role } from "pages/Admintraction/Role";
import { TeamMate } from "pages/Admintraction/TeamMate";
import { EmailOTPForm } from "pages/EmailOTPForm/EmailOTPForm";
import { SignIn } from "pages/SigIn/SigIn";
import PasswordChangePage from "pages/PasswordChangePage/PasswordChangePage";
import { PasswordNewPage } from "pages/PasswordNewPage/PasswordNewPage";


 const  App= ()=> {

  return (
    <Routes>

      <Route  element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />,
        <Route path='/activity-log' element= { <ActivityLog />} />,
        <Route path="/transactions">
          <Route index element= { <Transations/>} />,
          <Route path=":id" element= { <TransationDetails />} />,

        </Route>
        <Route path="/businesses">
          <Route index element= { <Businesse />} />,
          <Route path=':id' element= {<BusinessTransaction />} />,
        </Route>

        <Route path="/administration">
          <Route path='team-mate' element= { <TeamMate />} />,
          <Route path='role' element= { <Role />} />,
        </Route>
        
        <Route path='/settings' element= { <Settings />} />,
      </Route>


      <Route element={<LayoutLoginDetails />}>
        <Route path='/login' element= {  <SignIn />} />,
        <Route path='/confirm-otp' element= {< EmailOTPForm />} />,
        <Route path='/password-reset' element= {<PasswordChangePage /> } />,
        <Route path='/new-password' element= {<PasswordNewPage /> } />,
      </Route>

    </Routes>
  )
};
export default App;