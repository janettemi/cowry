import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutLoginDetails } from 'component/Layout/LayoutLoginDetails';
import { Dashboard } from "pages/Dashboard";
import { Settings } from "pages/Setting";
import { ActivityLog } from "pages/Activity";
import { Transations } from "pages/Transation";
import { TransationDetails } from "pages/Transation/TransationDetails";
import { Businesse } from "pages/Businesses";
import { BusinessTransaction } from "pages/Businesses/BusinessTransactions/BusinessTransactions";
import { Role } from "pages/Admintraction/Role";
import { TeamMate } from "pages/Admintraction/TeamMate";
import { EmailOTPForm } from "Auth/ForgottonPassword/EmailOTPForm/EmailOTPForm";
import { SignIn } from "Auth/SigIn/SigIn";
import PasswordChangePage from "Auth/ForgottonPassword/PasswordChangePage/PasswordChangePage";
import { PasswordNewPage } from "Auth/ForgottonPassword/PasswordNewPage/PasswordNewPage";
import { AuthProvider } from "Auth";
import Layout from "component/Layout/Layout";
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path='/activity-log' element={<PrivateRoute element={<ActivityLog />} />} />
          <Route path="/transactions">
            <Route index element={<PrivateRoute element={<Transations />} />} />
            <Route path=":id" element={<PrivateRoute element={<TransationDetails />} />} />
          </Route>
          <Route path="/businesses">
            <Route index element={<PrivateRoute element={<Businesse />} />} />
            <Route path=':id' element={<PrivateRoute element={<BusinessTransaction />} />} />
          </Route>
          <Route path="/administration">
            <Route path='team-mate' element={<PrivateRoute element={<TeamMate />} />} />
            <Route path='role' element={<PrivateRoute element={<Role />} />} />
          </Route>
          <Route path='/settings' element={<PrivateRoute element={<Settings />} />} />
        </Route>

        <Route element={<LayoutLoginDetails />}>
          <Route path='/' element={<SignIn />} />
          <Route path='/confirm-otp' element={<EmailOTPForm />} />
          <Route path='/password-reset' element={<PasswordChangePage />} />
          <Route path='/new-password' element={<PasswordNewPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
