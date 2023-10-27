import React from 'react';
import '../styles/AdminSideBar.scss'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useUser from '../../../shared/hooks/user-hook/useUser';

interface PAGE_DATA {
    title: string,
    url: string,
    access_level?: number
}

const PAGES: Array<PAGE_DATA> = [
    {
        title: "Home",
        url: "/admin",
        access_level: 3
    },
    {
        title: "Create Spell",
        url: "/admin/create-spell",
        access_level: 3
    },
    {
        title: "Keywords",
        url: "/admin/keyword-manager",
        access_level: 3
    }
]

const AdminSideBar = () => {

    const {accessLevel} = useUser();

    return (
        <div className="a-AdminSideBar">
            <div className="a-AdminLinkBar">
                {
                    PAGES.map((page) => {
                        if (accessLevel < page.access_level) return <div key={page.title+page.url}></div>
                        return (
                            
                            <Link className="a-PageLink" to={page.url} key={page.title+page.url}>
                                <Button 
                                    color="primary" 
                                    className="a-PageLinkButton" 
                                    
                                    sx={{ color: 'white'}}
                                >
                                        {page.title}
                                </Button>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AdminSideBar;