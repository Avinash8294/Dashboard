
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import ForgotPassword from './pages/ForgotPassword';
import CheckDarkLanguage from './components/CheckDarkLanguage';


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
