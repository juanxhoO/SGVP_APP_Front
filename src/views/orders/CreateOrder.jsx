import * as React from 'react';
import { Grid, Typography, List, Box, Button, Card, Paper, CardContent, CardActions, MenuItem, FormControl, Select, InputLabel, ListItemButton, ListItemText, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import useDataStore from '../../store/useDataStore';


export default function CreateOrder() {
    const [selectedTime, setSelectedTime] = useState(null);
    const navigate = useNavigate()
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
        times.push(`${hour}:00`);
    }

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const userId = useAuthStore.getState().userId;
    const { register, handleSubmit, setValue, errors } = useForm();
    const [date, setDate] = useState(dayjs());
    const [maintenances, setMaintenances] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [selectedMaintenance, setSelectedMaintenance] = useState(null);
    // Fetch data
    const { data: fetchedMaintenances } = useDataFetcher("http://localhost:3000/v1/maintenances/");
    const { data: fetchedUser } = useDataFetcher("http://localhost:3000/v1/users/" + userId);

    useEffect(() => {
        if (fetchedMaintenances) {
            setMaintenances(fetchedMaintenances);
        }
    }, [fetchedMaintenances]);

    useEffect(() => {
        if (fetchedUser) {
            setVehicles(fetchedUser.vehicle);
        }
    }, [fetchedUser]);

    const onSubmit = async data => {
        data.userId = fetchedUser.id
        data.maintenanceDay = date;
        data.status = "PENDANT"
        data.selectedTime = selectedTime
        // handle form submission
        try {
            const response = await axios.post('http://localhost:3000/v1/orders/', data);
            if (response.status === 201) {
                useDataStore.getState().setOrder(response.data.id);
                navigate("/orders/receipt")
            }

        } catch (error) {
            console.log('Error creating order:', error); // handle the error as needed
        }
    };

    const handleMaintenanceSelect = (maintenance) => {
        setSelectedMaintenance(maintenance);
        setValue("maintenanceId", maintenance.id); // set the selected maintenance name in the form
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                sx={{
                    p: 4,
                    alignItems: 'center',
                }}
            >
                <Typography variant='h4'>
                    Crear Orden de Mantenimiento
                </Typography>
                <Box sx={{ my: 4 }} display="flex">
                    {maintenances?.map((maintenance, index) => (
                        <Card sx={{ mx: 2, display: "flex", minWidth: 275, flexDirection: "column", flexGrow: "1", bgcolor: selectedMaintenance === maintenance ? 'lightblue' : 'white' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {maintenance.name}
                                </Typography>
                                <Typography>
                                    Precio:
                                </Typography>
                                <Typography variant="h5" component="div">
                                    ${maintenance.price}
                                </Typography>
                                <Typography variant="body2">
                                    {maintenance.details}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleMaintenanceSelect(maintenance)}>
                                    Seleccionar Mantenimiento
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>

                <Grid container spacing={2}>
                    <Grid sx={{display:"flex", rowGap:"2rem", flexDirection:"column"}}item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="vehicle-select-label">Vehiculo</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="vehicle-select-label"
                                id="vehicle-select"
                                {...register("vehicleId", { required: "Porfavor Seleccione un Vehiculo" })}
                            >
                                {vehicles?.map((vehicle, index) =>
                                    <MenuItem key={index} value={vehicle?.id}>{vehicle.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <Box item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Dependencia</Typography>
                            <Typography>{fetchedUser?.subcircuit?.name}</Typography>
                        </Box>
                        <Box item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Observaciones</Typography>
                            <TextField
                                label="Multiline"
                                multiline
                                rows={8}

                                fullWidth></TextField>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                <DemoItem label="Seleccione Fecha de Mantenimiento">
                                    <DateCalendar
                                        fullWidth
                                        value={date}
                                        onChange={(newDate) => setDate(newDate)}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                        <div>
                            <Typography variant="h6">Seleccione Horario:</Typography>
                            <List>
                                {times.map((time) => (
                                    <ListItemButton
                                        button
                                        key={time}
                                        selected={selectedTime === time}
                                        onClick={() => handleTimeClick(time)}
                                    >
                                        <ListItemText primary={time} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </div>
                    </Grid>
                    <Box>
                        <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>
                            Generar Orden de Mantenimiento
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
}
