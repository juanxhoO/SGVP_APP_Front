import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import BuildIcon from '@mui/icons-material/Build';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/admin/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItem>
                <ListItemText primary="Dashboard"></ListItemText>
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/profile">
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItem>
                <ListItemText primary="Mi Perfil"></ListItemText>
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/orders">
            <ListItemIcon>
                <RoomPreferencesIcon />
            </ListItemIcon>
            <ListItem component={Link} to="/orders">
                <ListItemText primary="Mantenimientos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/users">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Usuarios" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/reports">
            <ListItemIcon>
                <ContentPasteIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Reportes" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/stocks">
            <ListItemIcon>
                <InventoryIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Repuestos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/mecanics">
            <ListItemIcon>
                <BuildIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Mecanicos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/vehicles">
            <ListItemIcon>
                <DirectionsCarIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Vehiculos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/dependencies">
            <ListItemIcon>
                <AddRoadIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Circuitos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/messages">
            <ListItemIcon>
                <EmailIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Messages" />
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/ordertypes">
            <ListItemIcon>
                <SettingsInputCompositeIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Tipos de Mantenimiento" />
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/admins">
            <ListItemIcon>
                <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Administradores" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Logout" />
            </ListItem>
        </ListItemButton>
    </React.Fragment>
);

