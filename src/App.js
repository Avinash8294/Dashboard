
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';

function App() {
  return (
   <>
     {/* <CheckDarkLanguage/> */}
        <Routes>        
          <Route path="/" element={<Login />} />
          <Route path="/forget_password" element={<ForgotPassword />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
        </Routes>
    </>
   
  );
}

export default App;
