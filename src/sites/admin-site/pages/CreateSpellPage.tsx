import React from 'react'
import AdminPage from '../layouts/AdminPage'
import CreateSpellForm from '../views/CreateSpellForm';
import AccessProtectedRoute from '../../../shared/components/AccessProtectedRoute';


const CreateSpellPage = () => {
    return (
        <AccessProtectedRoute levelRequired={1} redirectURI={"/"}>
            <AdminPage>
                <CreateSpellForm />
            </AdminPage>
        </AccessProtectedRoute>
    )
}

export default CreateSpellPage;