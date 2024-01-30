import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Vehicles() {


      const headerCells = ['Name', 'type', 'model', 'Carbs (g)', 'Protein (g)'];

      const rowsData = [
        { name: 'Frozen yoghurt', type: 159, model: 6.0, carbs: 24, protein: 4.0 },

        { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },

        { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
        // ... other rows
      ];

    return (
        <Container>
            <CustomizedTables headerCells={headerCells}  rowsData={rowsData}/>
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/vehicles/create" size="large" variant="contained">Crear Vehiculo</Button>
            </Box>
        </Container>
    );
}