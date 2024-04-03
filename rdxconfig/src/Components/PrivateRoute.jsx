import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useSelector((store) => store.authReducer.auth);

  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
