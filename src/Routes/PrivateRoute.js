import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="grow" variant="secondary" />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
