import * as React from 'react';
import { Grid, Typography, Select, MenuItem, TextField, Box, Stack, Button, Card, CardMedia, CardContent, FormControl, Container } from '@mui/material';

import { Link } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';
import { useNavigate, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function VehicleHistory() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: ordersInfo, isLoading } = useDataFetcher('http://localhost:3000/v1/vehicles/' + id);

    console.log(ordersInfo?.orders)


    return (
        <Container>
            <Box display="flex" sx={{ flexDirection: 'column', p: 2 }}>
                {ordersInfo?.orders.map((order, index) => (
                    <Card sx={{p:2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Orden Numero {index + 1}
                            </Typography>

                            <Typography sx={{fontWeight:"bold"}}>
                                Id:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {order.id}
                            </Typography>

                            <Typography sx={{fontWeight:"bold"}}>
                                Fecha de Mantenimiento:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {order.maintenanceDay}
                            </Typography>

                            <Typography sx={{fontWeight:"bold"}}>
                                Estado de Orden:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {order.status}
                            </Typography>

                            <Typography sx={{fontWeight:"bold"}}>
                                Descripcion de Orden:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {order.description}
                            </Typography>

                            <Typography sx={{fontWeight:"bold"}}>
                                Hora de Mantenimiento:
                            </Typography>
                            <Typography>
                                {order.selectedTime}
                            </Typography>
                            <Box>
                                <Button variant="contained" component={Link} to={`/orders/${order.id}`} >Ver Orden</Button>
                            </Box>
                        </CardContent>
                    </Card>

                ))}
            </Box>
        </Container>
    );
}