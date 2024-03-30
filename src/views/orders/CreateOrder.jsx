import * as React from 'react';
import { Grid, Typography, List, Box,  Button, Card, Paper, CardContent, CardActions, MenuItem, FormControl, Select, InputLabel, ListItem, ListItemButton, ListItemText } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateOrder() {

    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const orderHours = [
        { "hour": "07:00", "available": true },
        { "hour": "08:00", "available": true },
        { "hour": "09:00", "available": true },
        { "hour": "10:00", "available": true },
        { "hour": "11:00", "available": true },
        { "hour": "12:00", "available": true },
        { "hour": "13:00", "available": true },
        { "hour": "14:00", "available": true },
        { "hour": "15:00", "available": true },
        { "hour": "16:00", "available": true },
        { "hour": "17:00", "available": true }
    ]

    return (
        <Grid
            container
            sx={{
                p: 4,
                alignItems: 'center',
            }}>

            <Typography variant='h4'>
                Crear Orden de Mantenimiento
            </Typography>
            <Box display="flex">
                <Paper>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Mantenimiento 1
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Seleccionar Mantenimiento</Button>
                        </CardActions>
                    </Card>

                </Paper>


                <Paper>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Mantenimiento 2
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Seleccionar Mantenimiento</Button>
                        </CardActions>
                    </Card>

                </Paper>


                <Paper>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Mantenimiento 3
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Seleccionar Mantenimiento</Button>
                        </CardActions>
                    </Card>

                </Paper>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Vehiculo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="test"
                            label="Age"
                        >
                            <MenuItem value={10}>Kia Sportage 2004</MenuItem>
                            <MenuItem value={30}>Kia Rio 2018</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Usuario</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Usuario</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="test"
                            label="Age"
                        >
                            <MenuItem value={10}>Usuario1</MenuItem>
                            <MenuItem value={20}>Usuario2</MenuItem>
                            <MenuItem value={30}>Usuario3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <List>
                        {orderHours.map(({ hour, available }) => (
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText>{hour}: {available ? 'Available' : 'Not Available'}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                            <DemoItem label="Controlled calendar">
                                <DateCalendar fullWidth value={value} onChange={(newValue) => setValue(newValue)} />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Generar Orden de Mantenimiento</Button>
            </Grid>
        </Grid>
    );
}