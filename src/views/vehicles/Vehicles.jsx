import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Vehicles() {
    const { data: publicVehicles, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/vehicles/");
    const { data: privateVehicles } = useDataFetcher("http://localhost:3000/v1/privatevehicles/");

    const headerCells = ['name', 'chasis', 'model', 'brand', 'plate', 'type', 'mileage', 'engine_cc', 'carringcapacity', 'passengers'];
    const rowsData = publicVehicles ?? [];

    const privaterowsData = privateVehicles ?? [];

    return (
        <Box p={3}>

            <Typography>
                Vehiculos Institucionales
            </Typography>
            <CustomizedTables sx={{ mt: 2 }} headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/vehicles/create" size="large" variant="contained">Crear Vehiculo</Button>
            </Box>
            <Typography>Vehiculos Privados</Typography>
            <CustomizedTables sx={{ mt: 2 }} headerCells={headerCells} rowsData={privaterowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/privatevehicles/create" size="large" variant="contained">Crear Vehiculo</Button>
            </Box>
        </Box>
    );
}