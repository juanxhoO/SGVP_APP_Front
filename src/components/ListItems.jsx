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
            <ListItemIcon sx={{color:"#ffffff"}}>
                <DashboardIcon />
            </ListItemIcon>
            <ListItem>
                <ListItemText primary="Dashboard"></ListItemText>
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/profile">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItem>
                <ListItemText primary="Mi Perfil"></ListItemText>
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/orders">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <RoomPreferencesIcon />
            </ListItemIcon>
                <ListItemText primary="Mantenimientos" />
        </ListItemButton>
        <ListItemButton component={Link} to="/users">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <PeopleIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Usuarios" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/reports">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <ContentPasteIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Reportes" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/stocks">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <InventoryIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Repuestos" />
            </ListItem>
        </ListItemButton>
        {/* <ListItemButton component={Link} to="/mecanics">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <BuildIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Mecanicos" />
            </ListItem>
        </ListItemButton> */}
        <ListItemButton component={Link} to="/vehicles">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <DirectionsCarIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Vehiculos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/dependencies">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <AddRoadIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Circuitos" />
            </ListItem>
        </ListItemButton>
        <ListItemButton component={Link} to="/contracts">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <EmailIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Contratos" />
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/maintenances">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <SettingsInputCompositeIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Tipos de Mantenimiento" />
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/roles">
            <ListItemIcon sx={{color:"#ffffff"}}>
                <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Administradores" />
            </ListItem>
        </ListItemButton>
        <ListItemButton   to="/authentication/sign-in" component={Link}>
            <ListItemIcon sx={{color:"#ffffff"}}>
                <LogoutIcon />
            </ListItemIcon>
            <ListItem >
                <ListItemText primary="Logout" />
            </ListItem>
        </ListItemButton>
    </React.Fragment>
);

