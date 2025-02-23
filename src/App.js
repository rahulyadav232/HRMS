import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Registeration/Register';
import Employee from './pages/Employee/Employee';
import Attendance from './pages/Attendance/Attendace';
import Leave from './pages/Leave/Leave';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/employees' element= {<Employee />} />
      <Route path='/attendance' element= {<Attendance />} />
      <Route path='/leaves' element={<Leave />} />
    </Routes>
  );
}

export default App;