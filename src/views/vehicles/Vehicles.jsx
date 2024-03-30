import * as React from 'react';
import Container from '@mui/material/Container';
import CustomizedTables from '../../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Vehicles() {
    const headerCells = ['Nombre', 'Tipo', 'Modelo', 'Marca', 'Capacidad', 'Cilindraje', 'Ocupantes', 'Kilometraje', 'Carga', 'Placa', 'Editar'];

    const rowsData = [
        { nombre: 'Kia Sportage', tipo: 'SUV', modelo: "Sportage", marca: 'kia', capacidad: 4.0, cilindraje: 2000, ocupantes: 5, kilometraje: 50000, carga: '800kg', placa: 'PDR7878', editar: 'Editar' },
        {
            "nombre": "Toyota Camry",
            "tipo": "Sedan",
            "modelo": "Camry",
            "marca": "Toyota",
            "capacidad": 4.5,
            "cilindraje": 2500,
            "ocupantes": 5,
            "kilometraje": 60000,
            "carga": "700kg",
            "placa": "XYZ123",
            "editar": "Editar"
        },
        {
            "nombre": "Honda CR-V",
            "tipo": "SUV",
            "modelo": "CR-V",
            "marca": "Honda",
            "capacidad": 4.2,
            "cilindraje": 2200,
            "ocupantes": 5,
            "kilometraje": 45000,
            "carga": "900kg",
            "placa": "ABC456",
            "editar": "Editar"
        },
        {
            "nombre": "Ford F-150",
            "tipo": "Truck",
            "modelo": "F-150",
            "marca": "Ford",
            "capacidad": 5.0,
            "cilindraje": 3000,
            "ocupantes": 3,
            "kilometraje": 75000,
            "carga": "1200kg",
            "placa": "DEF789",
            "editar": "Editar"
        },
        {
            "nombre": "Chevrolet Malibu",
            "tipo": "Sedan",
            "modelo": "Malibu",
            "marca": "Chevrolet",
            "capacidad": 4.3,
            "cilindraje": 2300,
            "ocupantes": 5,
            "kilometraje": 55000,
            "carga": "600kg",
            "placa": "GHI101",
            "editar": "Editar"
        },
        {
            "nombre": "Nissan Rogue",
            "tipo": "SUV",
            "modelo": "Rogue",
            "marca": "Nissan",
            "capacidad": 4.4,
            "cilindraje": 2400,
            "ocupantes": 5,
            "kilometraje": 50000,
            "carga": "850kg",
            "placa": "JKL202",
            "editar": "Editar"
        }

        // ... other rows
    ];

    return (
        <Container>
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/vehicles/create" size="large" variant="contained">Crear Vehiculo</Button>
            </Box>
        </Container>
    );
}