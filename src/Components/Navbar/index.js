/* eslint-disable react/prop-types */
import * as React from 'react';
import { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SpectrumLogo from '../../assets/logos/spectrum_white.png';
import GoogleLoginButton from '../GoogleLogin';

const pages = ['Team', 'Developers', 'Contact Us'];

function NavBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const googleLoginButtonChildRef = useRef();

    var userProfilePicture = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0025/1559/brand.gif?itok=vXujPldk";
    if(props.user && props.user.picture) userProfilePicture = props.user.picture;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleUserLogout = () => {
        googleLoginButtonChildRef.current.logOut();
        handleCloseUserMenu();
    }

    return (
        <AppBar
            position='absolute'
            sx={{
                background: '#000',
                opacity: 0.75,
                backdropFilter: 'blur(5px) saturate(180%)',
                webkitBackdropFilter: 'blur(5px) saturate(180%)',
            }}
            enableColorOnDark
        >
            <Container maxWidth='x1'>
                <Toolbar disableGutters>
                    <Box
                        component='img'
                        alt='Spectrum Logo'
                        src={SpectrumLogo}
                        sx={{ height: '1.5rem', display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='white'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center' fontFamily='Ubuntu'>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        component='img'
                        alt='Spectrum Logo'
                        src={SpectrumLogo}
                        sx={{ height: '1.2rem', display: { xs: 'flex', md: 'none' }, mr: 3 }}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    fontFamily: 'Ubuntu',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {props.user ?
                    (<Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Open settings'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt='Remy Sharp' src={userProfilePicture} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
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
                        <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>Account</MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>Dashboard</MenuItem>
                        <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>) : null}
                    <GoogleLoginButton ref={googleLoginButtonChildRef} handleUserLogin={props.handleUserLogin} handleUserLogout={props.handleUserLogout} user={props.user} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
