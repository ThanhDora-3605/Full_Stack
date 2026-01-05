import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  if (isAuthenticated) {
    return <Outlet />;
  }
  const continueURL = location.pathname;
  return <Navigate to={`/login?continue=${continueURL}`} replace />;
}
