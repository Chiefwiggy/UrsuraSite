import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({isPermitted, redirectURI, children}) => {
    
    if (isPermitted) return children;

    return <Navigate to={redirectURI} replace />
}

export default ProtectedRoute;