import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Orders() {

    return (
        <Container component="main" >
            <CustomizedTables></CustomizedTables>
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/orders/create" size="large" variant="contained">Crear Orden de Mantenimiento</Button>
            </Box>
        </Container>
    );
}