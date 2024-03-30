import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, AppBar } from '@mui/material';
import Notification from '../components/Notifcation';
import useSidebarStore from '../hooks/useSidebar';
import useNotification from '../hooks/useNotification';

function Header() {
    const logoutHandle = () => {
        window.location = "/authentication/sign-in";
    }
    const { toggleSidebar } = useSidebarStore();
    const { open, toggleNotifications } = useNotification();
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
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box>
                        <IconButton onClick={toggleNotifications} color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* <Notification /> */}
                        <IconButton onClick={logoutHandle} color="inherit">
                            <LogoutIcon />
                        </IconButton>
                        {open && <Notification />}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
