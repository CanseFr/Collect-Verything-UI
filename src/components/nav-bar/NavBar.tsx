import {useState} from "react";
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
import AdbIcon from '@mui/icons-material/Adb';
import {useAuth} from "../../context/FakeAuthContext";
import {NavLink, useNavigate} from "react-router-dom";

const pages = ['Solution', 'Tarification', 'Ressource'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settingsAdmin = ['Administration', 'Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {

    const {isAuthenticated, avatar, logout, role} = useAuth()

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const navigate = useNavigate()

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{bgcolor: "white"}} position="static">
            <Container maxWidth="xl" sx={{bgcolor: "white"}}>
                <Toolbar sx={{bgcolor: "white", color: "black"}} disableGutters>
                    <NavLink to={"/"}>
                        <Avatar alt="Click & Verything" src="assets/logo.png"/>
                    </NavLink>
                    <Box display={"flex"} flexDirection={"column"} marginRight={'30px'}>
                        <NavLink to={"/"}>
                            <Typography variant="h6" noWrap component="a" sx={{
                                ml: 4,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                            >
                                Collect
                            </Typography>
                        </NavLink>
                        <NavLink to={"/"}>

                            <Typography variant="h6" noWrap component="a" sx={{
                                ml: 4,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                            >
                                & Verything
                            </Typography>
                        </NavLink>
                    </Box>


                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                <NavLink className="no-deco-link" to={"/solution"}>
                                    {page}
                                </NavLink>
                            </Button>
                        ))}
                    </Box>

                    {isAuthenticated &&
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src={avatar}/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
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

                                {role === 'ROLE_ADMIN' ?

                                    <>
                                        {settingsAdmin.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                {setting === "Administration" && <NavLink to={"/admin"}><Typography sx={{color: 'red'}} textAlign="center">{setting}</Typography></NavLink>}
                                                {setting === "Profile" && <Typography textAlign="center">{setting}</Typography>}
                                                {setting === "Account" && <Typography textAlign="center"><NavLink to={"/account"}>{setting}</NavLink></Typography>}
                                                {setting === "Dashboard" && <Typography textAlign="center">{setting}</Typography>}
                                                {setting === "Logout" && <Typography onClick={logout} textAlign="center">{setting}</Typography>}
                                            </MenuItem>
                                        ))}
                                    </>


                                    :
                                    <>
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                {setting === "Profile" && <Typography textAlign="center">{setting}</Typography>}
                                                {setting === "Account" && <Typography textAlign="center"><NavLink to={"/account"}>{setting}</NavLink></Typography>}
                                                {setting === "Dashboard" && <Typography textAlign="center">{setting}</Typography>}
                                                {setting === "Logout" && <Typography onClick={logout} textAlign="center">{setting}</Typography>}
                                            </MenuItem>
                                        ))}

                                    </>
                                }


                            </Menu>
                        </Box>
                    }

                    {!isAuthenticated &&
                        <>
                            <Button variant="text">
                                <NavLink style={{textDecoration: "none", color: "black"}} to={"login"}>
                                    Login
                                </NavLink>
                            </Button>
                            <Button className={'no-deco-link'} variant="contained" sx={{bgcolor: "black"}}>
                                <NavLink to={"register"}>
                                    <Typography sx={{color: 'white'}}>
                                        Register
                                    </Typography>
                                </NavLink>
                            </Button>
                        </>
                    }


                </Toolbar>
            </Container>
        </AppBar>
    );

}