import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SignIn } from "./landing-Pages/sign-in/SignIn";
import { PasswordReset } from "./landing-Pages/password-reset/PasswordReset";
import { EmailCheck } from "./landing-Pages/emailcheck/EmailCheck";
import { NewPassword } from "./landing-Pages/newpassword/NewPassword";
import { Dashboard } from "./app/dashboard/Dashboard";
import { ActivityLog } from "./app/activitylog/ActivityLog";
import { Settings } from "./app/settings/Settings";
import { Businesses } from "./app/businesses/Businesses";
import { Transations } from "./app/transation/Transations";
import { TransationDetails } from "./app/transation/transationdetails/TransationDetails";
import { BusinessDetails } from "./app/businesses/businessdetails/BusinessDetails";
import { AppRouter } from "./component/approutes/AppRouter";
import { TeamMate } from "./app/administraction/component/teammates";
import { Role } from "./app/administraction/component/role";
import { ProfileInformation } from "./app/settings/profileinformation/ProfileInformation";
import { ChangePassWord } from "./app/settings/changepassword/ChangePassWord";

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/ActivityLog', element: <ActivityLog /> },
  { path: '/Transactions', element: <Transations /> },
  { path: '/Settings', element: <Settings /> },
  { path: '/Businesses', element: <Businesses /> },
  { path: '/Administration/team-mate', element: <TeamMate /> },
  { path: '/Administration/role', element: <Role /> },
  { path: '/transation/TransationDetail', element: <TransationDetails /> },
  { path: '/business/businessDetail', element: <BusinessDetails /> },
  { path: '/SignIn', element: <SignIn /> },
  { path: '/auth/forgot-password', element: <PasswordReset /> },
  { path: '/emailcheck', element: <EmailCheck /> },
  { path: '/NewPassword', element: <NewPassword /> },
  { path: '/AppRouter', element: <AppRouter /> },
  {path:'/setting/profileinformation',element:<ProfileInformation />},
  {path:'/setting/ChangePassword',element:<ChangePassWord />}
]);


 const  App= ()=> {
  return (
    <RouterProvider router={router} />
  )
};
export default App;