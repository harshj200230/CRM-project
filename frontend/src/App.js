// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard'; 
import Campaigns from './pages/Campaigns'; 
import AudienceForm from './components/audienceCreation/AudienceForm'; 
import CampaignList from './components/campaignManagement/CampaignList'; 
import Navbar from './components/Navbar'; 
import Login from './components/Login'; // Import the Login component

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {loggedIn && <Navbar onLogout={handleLogout} />} 
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/campaigns" element={loggedIn ? <Campaigns /> : <Navigate to="/login" />} />
          <Route path="/audience" element={loggedIn ? <AudienceForm /> : <Navigate to="/login" />} />
          <Route path="/campaignlist" element={loggedIn ? <CampaignList /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
