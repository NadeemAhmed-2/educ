import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProtectedAdminRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Add a loading spinner here
  }

  return user && user.email === "varikalaanil@gmail.com" ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedAdminRoute;
