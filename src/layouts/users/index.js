import * as React from 'react';

import Container from '@mui/material/Container';

import CustomizedTables from '../components/DataTable/Table';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Users() {
    const headerCells = ['Nombre', 'Apellido', 'Correo', 'Telefono', 'Cedula', 'fecha_nacimiento', 'Rango', 'Sangre_Tipo', 'Editar'];
   
   
    const rowsData = [
        {
            "nombre": "Juan",
            "correo": "gji@hotmail.com",
            "apellido": "Granja",
            "telefono": "0987777775",
            "cedula": "1717676767",
            "fecha_nacimiento": "15-06-1993",
            "rango": "Teniente",
            "sangre_tipo": "ORH+",
            "editar": "Editar"
        },
        {
            "nombre": "Maria",
            "correo": "maria@gmail.com",
            "apellido": "Lopez",
            "telefono": "0998888888",
            "cedula": "1712345678",
            "fecha_nacimiento": "22-03-1985",
            "rango": "Capitán",
            "sangre_tipo": "A+",
            "editar": "Editar"
        },
        {
            "nombre": "Carlos",
            "correo": "carlos@yahoo.com",
            "apellido": "Gonzalez",
            "telefono": "0976543210",
            "cedula": "1723456789",
            "fecha_nacimiento": "10-12-1980",
            "rango": "Sargento",
            "sangre_tipo": "B-",
            "editar": "Editar"
        },
        {
            "nombre": "Luisa",
            "correo": "luisa@hotmail.com",
            "apellido": "Rodriguez",
            "telefono": "0966666666",
            "cedula": "1756789012",
            "fecha_nacimiento": "05-09-1990",
            "rango": "Soldado",
            "sangre_tipo": "AB+",
            "editar": "Editar"
        },
        {
            "nombre": "Pedro",
            "correo": "pedro@gmail.com",
            "apellido": "Gomez",
            "telefono": "0944444444",
            "cedula": "1767890123",
            "fecha_nacimiento": "18-07-1988",
            "rango": "Mayor",
            "sangre_tipo": "O-",
            "editar": "Editar"
        }
                
        
        
    ];

    return (
        <Container component="main">
            <CustomizedTables headerCells={headerCells} rowsData={rowsData} />
            <Box sx={{ justifyContent: "end", display: "flex" }}>
                <Button component={Link} to="/users/create" size="large" variant="contained">Crear Usuario</Button>
            </Box>
        </Container>
    );
}