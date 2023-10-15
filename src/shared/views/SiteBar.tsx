import React from 'react';
import { Link } from "react-router-dom"
import useUser from '../hooks/user-hook/useUser'
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';


import '../styles/SiteBar.scss';

const PAGES = [
    {
        title: "Reference",
        url: "/"
    },
    {
        title: "Spells",
        url: "/spells"
    },
    {
        title: "Sheets",
        url: "/builder/my-characters"
    }
]

const ACCOUNT_SETTINGS = [
    {
        title: "Account",
        url: "/account"
    },
    {
        title: "Logout",
        url: "/account/logout"
    }
]


const SiteBar = ({currentPage}) => {

    const {loggedIn, GetUserData} = useUser();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <div className="SiteBar">
        
            <AppBar position="static"
                sx={{bgcolor: '#232323'}}
            >
                <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    3Hex
                </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {
                            PAGES.map((page) => {
                                return (
                                    <Button
                                        key={page.url}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        <Link className="SiteBar-Link" to={page.url}>{page.title}</Link>
                                    </Button>
                                )
                            })
                        }
                    </Box>
                    {
                        loggedIn ?
                        <Box sx={{ flexGrow: 0}}>
                            <Tooltip title="Open Settings">
                                <IconButton sx={{p: 0}} onClick={handleOpenUserMenu}>
                                    <Avatar src="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                
                                sx={{ 
                                    mt: '45px'
                                }}
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {
                                    ACCOUNT_SETTINGS.map((setting) => {
                                        return (
                                            <MenuItem key={setting.title} onClick={handleCloseUserMenu} className="SiteBar-MenuAppBar">
                                                <Link className="SiteBar-Link" to={setting.url}>{setting.title}</Link>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                            
                        </Box> :
                        <Box>
                            <Button
                                key={'login-link-xxxwe43213123'}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link className="SiteBar-Link" to={'/account/login'}>Login</Link>
                            </Button>
                        </Box>
                    }

                    
                </Toolbar>
            </AppBar>
            
            
            
            
            
            {/* {currentPage}
            <Link to="/">Reference</Link>
            <Link to="/spells">Spells</Link>
            <Link to="/builder">Character Sheets</Link>
            <Link to="/builder/my-characters">Character Sheets</Link>
            <Link to="/builder/dev/talents">Talents</Link>
            {
                loggedIn
                ?
                    <>
                    <Link to="/account">Account</Link>
                    <Link to="/account/logout">Logout</Link>
                    </>
                : 
                    <Link to="/account/login">Login</Link>
            } */}
        </div>
    )
}

export default SiteBar