import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../components/DataTable/Table';
import { Button, Box } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Mecanics() {

    return (
        <Container component="main">
            <CustomizedTables></CustomizedTables>
            <Box sx={{justifyContent:"end", display:"flex"}}>
                <Button size="large" variant="contained">Crear Mecanica</Button>
            </Box>
        </Container>
    );
}