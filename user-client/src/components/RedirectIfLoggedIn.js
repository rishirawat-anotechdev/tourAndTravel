import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectIfLoggedIn = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    // Redirect logged-in users to the home page
    return <Navigate to="/" />;
  }

  // Render the child component if not logged in
  return children;
};

export default RedirectIfLoggedIn;
