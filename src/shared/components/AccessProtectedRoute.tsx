import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import useUser from '../hooks/user-hook/useUser';

const AccessProtectedRoute = ({levelRequired, redirectURI, children}) => {

    const {accessLevel} = useUser();


    return (
        <ProtectedRoute 
            isPermitted={accessLevel >= levelRequired}
            redirectURI={redirectURI}
        >
            {children}
        </ProtectedRoute>
    )
}


export default AccessProtectedRoute;