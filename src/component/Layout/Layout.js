import React from 'react';
import { Outlet } from 'react-router-dom';


import AppHeader from 'component/AppHeader/AppHeader'
import SideBar from 'component/SideBar/SideBar'

const Layout = () => {
  return (
    <div>
     <AppHeader />
     <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
