// pages/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../context/AuthProvider'; // Adjust the path as necessary

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
