import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Vehicles() {
    const { data, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/vehicles/");

    const headerCells = ['name', 'chasis', 'model', 'brand', 'plate', 'type', 'mileage', 'engine_cc', 'carringcapacity', 'passengers'];

    const rowsData = data ?? [];
    return (
        <Container>
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/vehicles/create" size="large" variant="contained">Crear Vehiculo</Button>
            </Box>
        </Container>
    );
}