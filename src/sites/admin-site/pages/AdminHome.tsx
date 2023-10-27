import React from 'react';
import StandardPage from '../layouts/StandardPage';


import AdminPage from '../layouts/AdminPage';
import AccessProtectedRoute from '../../../shared/components/AccessProtectedRoute';

const AdminHome = () => {
    return (
        <AccessProtectedRoute levelRequired={1} redirectURI={"/"}> 
            <AdminPage>
                testy
            </AdminPage>
        </AccessProtectedRoute>
    )
}

export default AdminHome;