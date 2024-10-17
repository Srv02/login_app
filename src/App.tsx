import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import './App.css'; 

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string) => {
    // Set authentication state
    setIsAuthenticated(true);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
