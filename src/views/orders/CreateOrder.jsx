import * as React from 'react';
import { Grid, Typography, List, Box, Button, Card, Paper, CardContent, CardActions, MenuItem, FormControl, Select, InputLabel, ListItem, ListItemButton, ListItemText } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function CreateOrder() {
    const { register, handleSubmit, setValue } = useForm();
    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [maintenances, setMaintenances] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    // Fetch data
    const { data: fetchedMaintenances } = useDataFetcher("http://localhost:3000/v1/maintenances/");
    const { data: fetchedUser } = useDataFetcher("http://localhost:3000/v1/users/78482100-999b-4373-a478-aab9635658eb");

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
        console.log(data);
        // handle form submission
        try {
            const response = await axios.post('http://localhost:3000/v1/orders/', data);
            console.log(response.data); // handle the response data as needed
        } catch (error) {
            console.error('Error creating order:', error); // handle the error as needed
        }

    };

    const handleMaintenanceSelect = (maintenance) => {
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
                <Box display="flex">
                    {maintenances?.map((maintenance, index) => (
                        <Paper key={index}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {maintenance.name}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {maintenance.price}
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
                        </Paper>
                    ))}
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                        <FormControl fullWidth>
                            <InputLabel id="vehicle-select-label">Vehiculo</InputLabel>
                            <Select
                                labelId="vehicle-select-label"
                                id="vehicle-select"
                                {...register("vehicleId")}
                            >
                                {vehicles?.map((vehicle, index) =>
                                    <MenuItem key={index} value={vehicle?.id}>{vehicle.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                <DemoItem label="Controlled calendar">
                                    <DateCalendar 
                                        fullWidth 
                                        value={date} 
                                        onChange={(newDate) => setDate(newDate)} 
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>
                        Generar Orden de Mantenimiento
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
