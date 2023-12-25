import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/profile">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItem component={Link} to="/profile">
                <ListItemText primary="Mi Perfil"><Link to="dsds">dsd</Link></ListItemText>
            </ListItem>
        </ListItemButton>

        <ListItemButton component={Link} to="/orders">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItem component={Link} to="/orders">

                <ListItemText primary="Mantenimientos"><Link to="dsds">dsd</Link></ListItemText>

            </ListItem>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItem component={Link} to="/users">
                <ListItemText primary="Usuarios" />
            </ListItem>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItem component={Link} to="/reports">
                <ListItemText primary="Reportes" />


            </ListItem>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>

            <ListItem component={Link} to="/stocks">

                <ListItemText primary="Repuestos" />

            </ListItem>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItem component={Link} to="/mecanics">
                <ListItemText primary="Mecanicos" />
            </ListItem>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>

            <ListItem component={Link} to="/vehicles">

                <ListItemText primary="Vehiculos" />

            </ListItem>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>

            <ListItem component={Link} to="/dependencies">

                <ListItemText primary="Circuitos" />

            </ListItem>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>

        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);