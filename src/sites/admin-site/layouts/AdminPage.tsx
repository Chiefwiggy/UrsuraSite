import React from 'react';
import StandardPage from './StandardPage';

import '../styles/AdminPage.scss';
import AdminSideBar from '../views/AdminSideBar';

const AdminPage = ({children}) => {
    return (
        <StandardPage>
            <div className="a-AdminPage">
                <div className="a-SideBarBox">
                    <AdminSideBar />
                </div>
                <div className="a-AdminContent">
                    {children}
                </div>
            </div>
        </StandardPage>
    )
}

export default AdminPage;