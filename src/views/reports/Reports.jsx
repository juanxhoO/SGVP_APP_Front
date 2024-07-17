import * as React from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import useDataFetcher from '../../hooks/useDataFetcher';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Reports() {
    const { data:reportsInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/reports/");
        console.log(reportsInfo)
        
        const headerCells = ['name', 'lastname', 'email', 'phone', 'id_card', 'fecha_nacimiento', 'rank', 'bloodType'];
        const rowsData =  reportsInfo ?? [];
    
    return (
        <Container component="main">
            <CustomizedTables sx={{ mt: 2 }} headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{justifyContent:"end", display:"flex"}}>
                <Button component={Link} to="/reports/create" size="large" variant="contained">Crear Reporte</Button>
            </Box>
        </Container>
    );
}