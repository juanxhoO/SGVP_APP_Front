import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, AppBar } from '@mui/material';
import Notification from '../components/Notifcation';
import useSidebarStore from '../hooks/useSidebar';
import useNotification from '../hooks/useNotification';
import useAuthStore from "../store/useAuthStore";
import useLogout from '../hooks/useLogout';

function Header() {

    const logout = useLogout()
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    const { toggleSidebar } = useSidebarStore();
    const { open, toggleNotifications } = useNotification();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {isAuthenticated ? <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton> : null}
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
                    >Home
                    </Typography>
                    {isAuthenticated ? <Box>
                        <IconButton onClick={toggleNotifications} color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* <Notification /> */}
                        <IconButton onClick={logout} color="inherit">
                            <LogoutIcon />
                        </IconButton>
                        {open && <Notification />}
                    </Box> : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
