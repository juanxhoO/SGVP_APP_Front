import * as React from 'react';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack, Box, AppBar, Button } from '@mui/material';
import Notification from './Notifcation';
const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));


function Header() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    ><Link to="/">
                            Home
                        </Link>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* <Notification /> */}
                        <IconButton color="inherit">
                            <LogoutIcon />
                        </IconButton>
                        <Notification />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>


    );
}

export default Header;
