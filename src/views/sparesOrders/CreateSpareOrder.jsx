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


export default function CreateSpareOrder() {
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
    const { data: fetchedUser } = useDataFetcher("http://localhost:3000/v1/users/");
    const { data: fetchedVehicles } = useDataFetcher("http://localhost:3000/v1/vehicles/");
    const { data: fetchedSpares } = useDataFetcher("http://localhost:3000/v1/spares/");
    const { data: fetchedLubricants } = useDataFetcher("http://localhost:3000/v1/lubricants/");


    console.log(fetchedVehicles)
    useEffect(() => {
        if (fetchedUser) {
            setVehicles(fetchedUser.vehicle);
        }
    }, [fetchedUser]);

    const onSubmit = async data => {
        console.log(data)
        // handle form submission
        try {
            const response = await axios.post('http://localhost:3000/v1/spareorders/', data);
            if (response.status === 201) {
                useDataStore.getState().setOrder(response.data.id);
                //navigate("/orders/receipt")
                console.log(response)
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
                    Crear Orden Repuesto o Lubricante
                </Typography>

                <Grid container spacing={2}>
                    <Grid sx={{ display: "flex", rowGap: "2rem", flexDirection: "column" }} item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Repuesto</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="vehicle-select-label">Repuesto</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="vehicle-select-label"
                                id="vehicle-select"
                                {...register("spareId", { required: "Porfavor Seleccione un Vehiculo" })}
                            >
                                {fetchedSpares?.map((spare, index) =>
                                    <MenuItem key={index} value={spare?.id}>{spare.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ display: "flex", rowGap: "2rem", flexDirection: "column" }} item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="vehicle-select-label">Vehiculo</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="vehicle-select-label"
                                id="vehicle-select"
                                {...register("vehicleId", { required: "Porfavor Seleccione un Vehiculo" })}
                            >
                                {fetchedVehicles?.map((vehicle, index) =>
                                    <MenuItem key={index} value={vehicle?.id}>{vehicle.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ display: "flex", rowGap: "2rem", flexDirection: "column" }} item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Lubricante</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="vehicle-select-label">Lubricante</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="vehicle-select-label"
                                id="vehicle-select"
                                {...register("lubricantId", { required: "Porfavor Seleccione un Vehiculo" })}
                            >
                                {fetchedLubricants?.map((lubricant, index) =>
                                    <MenuItem key={index} value={lubricant?.id}>{lubricant.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid sx={{ display: "flex", rowGap: "2rem", flexDirection: "column" }} item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar usuario</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="vehicle-select-label">Usuario</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="vehicle-select-label"
                                id="vehicle-select"
                                {...register("userId", { required: "Porfavor Seleccione un Vehiculo" })}
                            >
                                {fetchedUser?.map((user, index) =>
                                    <MenuItem key={index} value={user?.id}>{user.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
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
                    </Grid>

                </Grid>
                <Box>
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>
                        Generar Orden Lubricante o Repuesto
                    </Button>
                </Box>
            </Grid>
        </form>
    );
}
