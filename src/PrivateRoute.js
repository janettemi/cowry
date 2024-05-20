import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'Auth'; // assuming you have a custom hook to access authentication context

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
