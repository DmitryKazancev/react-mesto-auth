import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, loggedIn, ...props  }) => {

  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/sing-in" replace/>  
)}

export default ProtectedRouteElement; 