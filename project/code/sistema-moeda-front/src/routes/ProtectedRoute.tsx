import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("useContext must be used within a UserProvider");
  }

  const { userType } = userContext;

  return userType && allowedRoles.includes(userType) ? (
    <Outlet />
  ) : (
    <Navigate to="/access-denied" />
  );
};

export default ProtectedRoute;