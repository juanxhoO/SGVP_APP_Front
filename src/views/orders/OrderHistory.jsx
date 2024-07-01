import * as React from 'react';
import { Grid, Typography, Paper, Box, Button } from '@mui/material';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDataStore from '../../store/useDataStore';
import { useRef } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import generatePDF from 'react-to-pdf';

export default function OrderHistory() {
    const orderId = useDataStore.getState().order
    const { data: orderInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/orders/" + orderId);
    const targetRef = useRef();
    const date = dayjs(orderInfo?.maintenanceDay);
    const formattedDate = date.format('DD-MM-YYYY');

    return (
        <Grid container spacing={2}>
            <Grid xs={12} >
                <Paper ref={targetRef} sx={{ p: 12 }}>
                    <Box sx={{ mb: 6, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Detalles de Orden#:
                        </Typography>
                        <Typography>
                            {orderInfo?.id}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Fecha de Mantenimiento:
                            </Typography>
                            <Typography>
                                {formattedDate}
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Hora de Entrega:
                            </Typography>
                            <Typography>
                                {orderInfo?.selectedTime}

                            </Typography>

                            <Typography sx={{ fontWeight: "bold" }}>
                                observaciones:
                            </Typography>
                            {orderInfo?.observations}

                        </Box>
                    </Box>
                    <Box sx={{ mt: 4 }} display="flex">
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Responsable Vehicular:
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Nombre:
                                </Typography>
                                <Typography>
                                    {orderInfo?.user.name} {orderInfo?.user.lastname}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Correo:
                                </Typography>
                                <Typography>
                                    {orderInfo?.user.email}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Telefono:
                                </Typography>
                                <Typography>
                                    {orderInfo?.user.phone}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Rango:
                                </Typography>
                                <Typography>
                                    {orderInfo?.user.rank}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontWeight: "bold" }}>Detalles Vehiculo</Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} >
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Nombre:
                                </Typography>
                                <Typography>
                                    {orderInfo?.vehicle.name}

                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Modelo:
                                </Typography>
                                <Typography>
                                    {orderInfo?.vehicle.model}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Marca:
                                </Typography>
                                <Typography>
                                    {orderInfo?.vehicle.brand}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Kilometraje:
                                </Typography>
                                <Typography>
                                    {orderInfo?.vehicle.mileage}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    Placa:
                                </Typography>
                                <Typography>
                                    {orderInfo?.vehicle.plate}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", width: "100%", justifyContent: "end", mt: 6, gap: "2rem" }}>
                        <Button component={Link} to="/profile" sx={{ minWidth: '200px' }} type="submit" variant='contained'>Volver</Button>
                        <Button onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })} variant="contained"> Generar PDF</Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}