import React from 'react';
import './Dashboard.css';
import { useLocation } from 'react-router-dom';

interface LocationState {
  email: string;
}

const Dashboard: React.FC = () => {
const location = useLocation();
const { email } = location.state as LocationState;

  return (
    <div className="dashboard-container">
      <h1>Welcome to the HomePage!, {email}</h1>
    </div>
  );
};

export default Dashboard;