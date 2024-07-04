import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import useDataFetcher from '../../hooks/useDataFetcher';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Orders() {
    const { data: ordersInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/orders/");
    console.log(ordersInfo)
    const headerCells = ['id', 'status', ,'maintenanceDay','selectedTime'];
    const rowsData = ordersInfo ?? [];
    return (
        <Container component="main" >
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/orders/create" size="large" variant="contained">Crear Orden de Mantenimiento</Button>
            </Box>
        </Container>
    );
}