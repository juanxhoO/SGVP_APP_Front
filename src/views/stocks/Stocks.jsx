import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';

export default function Stocks() {
    const { data: stocksInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/spares/");
    const headerCells = ['name', 'condition', 'model', 'brand', 'price', 'sku', 'stock'];
    const rowsData = stocksInfo ?? [];
    return (
        <Container component="main" >
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/stocks/create" size="large" variant="contained">Crear Repuesto</Button>
            </Box>
        </Container>
    );
}