import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedAuthRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedAuthRoute;
