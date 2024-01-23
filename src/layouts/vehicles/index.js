import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../components/DataTable/Table';
import { Button, Box } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Vehicles() {

    return (

        <Container>

            <CustomizedTables>


            </CustomizedTables>

            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button size="large" variant="contained">Crear Vehiculo</Button>
            </Box>
        </Container>

    );
}