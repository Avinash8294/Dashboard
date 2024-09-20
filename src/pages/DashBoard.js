// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardView from './DashboardView'
import UserManagement from './UserManagement';
import DeviceManagement from './DeviceManagement';
import InventoryManagement from './InventoryManagement';
import CustomerManagement from './CustomerManagement';
import RoleBasedAccess from './RoleBasedAccess';
import MyProfile from './MyProfile';


function DashBoard() {
  return (
   
      <div className="flex min-h-screen">
        <Sidebar />
        <div className=" flex flex-col flex-grow ">
          <Header />
          <main className="flex-grow">
            <Routes>
            <Route path="/" element={<DashboardView />} />   
              <Route path="user-management" element={<UserManagement />} />
              <Route path="device-management" element={<DeviceManagement />} />
              <Route path="inventory-management" element={<InventoryManagement />} />
              <Route path="customer-management" element={<CustomerManagement />} />
              <Route path="role-based-access" element={<RoleBasedAccess />} />
              <Route path="profile" element={<MyProfile />} />
            </Routes>
          </main>
        </div>
      </div>
   
  );
}

export default DashBoard;
 