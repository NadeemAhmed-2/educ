import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If user is not authenticated, redirect to Login
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
