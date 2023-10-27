import AccessProtectedRoute from "../../../shared/components/AccessProtectedRoute";
import AdminPage from "../layouts/AdminPage"
import React from 'react';

const KeywordManagerPage = () => {


    return (
        <AccessProtectedRoute levelRequired={1} redirectURI={"/"}>
            <AdminPage>
                test
            </AdminPage>
        </AccessProtectedRoute>
    )
}

export default KeywordManagerPage;