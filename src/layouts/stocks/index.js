import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../components/DataTable/Table';
import { Box,Button } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Stocks() {

    return (
        <Container component="main" >
            <CustomizedTables></CustomizedTables>
            <Box sx={{justifyContent:"end", display:"flex"}}>
                <Button size="large" variant="contained">Crear Repuesto</Button>
            </Box>
        </Container>
    );
}