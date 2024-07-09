import React from 'react';
import Container from '@mui/material/Container';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDeleteEntity from '../../hooks/useDeleteItem';

export default function Bonuses() {
    const { data: bonusesInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/bonuses/");
    const { error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/bonuses');


    const handleDelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            deleteEntity(id);
        }
    };
    return (
        <Container component="main">
            <Typography variant="h4">
                Bonos Vehiculares
            </Typography>

            <Box>
                {bonusesInfo?.map((bonus, index) => (
                    <Box key={index} border={1} borderRadius={2} padding={2} marginBottom={2}>
                        <Typography variant="h6">Nombre del Bono: {bonus.name}</Typography>
                        <Typography>Marcas para el Descuento: {bonus.brands}</Typography>
                        <Typography>Kilometrajes para Calculo: {bonus.mileage}</Typography>
                        <Typography>Nivel de Peligrosidad: {bonus.dangerousness}</Typography>
                        <Typography>Cantidad del Bono: {bonus.price}</Typography>
                        <Box display="flex" justifyContent="space-between" marginTop={2}>
                            <Button onClick={() => handleDelete(bonus.id)} variant="contained" color="secondary">Borrar Bono</Button>
                        </Box>
                    </Box>
                ))}
                <Box marginTop={4}>
                    <Button component={Link} to="/bonos/create" variant="contained" color="primary">Crear Tipo Bono</Button>
                </Box>
            </Box>
        </Container>
    );
}
