import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../Redux/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  auth: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children,auth }) => {
  if (!auth) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
