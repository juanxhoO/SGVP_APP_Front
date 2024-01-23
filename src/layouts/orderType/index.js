import * as React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomizedTables from '../components/DataTable/Table';

// TODO remove, this demo shouldn't need to reset the theme.

export default function OrderTypes() {

    return (
            <Container component="main" >


                <Typography variant='h3'>Tipos de Mantenimiento</Typography>
                <CustomizedTables></CustomizedTables>
            </Container>
    );
}