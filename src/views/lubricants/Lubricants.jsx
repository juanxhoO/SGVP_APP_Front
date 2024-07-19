import * as React from 'react';
import CustomizedTables from '../../components/DataTable/Table';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Lubricants() {
    const { data: lubricantsInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/lubricants/");
    const headerCells = ['name', 'brand', 'provider', 'brand', 'price', 'quantity', 'stock'];
    const rowsData = lubricantsInfo ?? [];

    console.log(lubricantsInfo)
    return (
        <Box p={3}>
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/lubricants/create" size="large" variant="contained">Ingresar Nuevo Lubricante</Button>
            </Box>
        </Box>
    );
}