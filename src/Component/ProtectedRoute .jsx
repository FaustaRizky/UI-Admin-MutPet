import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // User belum login, redirect ke login page
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute