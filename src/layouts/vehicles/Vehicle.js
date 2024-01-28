import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.

export default function Vehicle() {
    const vehicle = {
        "id": "1",
        "image": "",
        "name": "Car123",
        "chasis": "ABC123XYZ456",
        "model": "Sportage",
        "plate": "ABC-123",
        'brand': 'Kia',
        "engine_cc": 2000,
        "engine_type": "Gasolina",
        "chargeCapacity": 50,
        "occupants": 5,
        "mileage": 50000,
        "type": "Sedan"
    }

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {vehicle.name}
                        </Typography>
                    </CardContent>
                </Card>

            </Box>

            <Button sx={{ minWidth: '200px' }} type="submit" component={Link} to='/vehicles/1/history/' variant='contained'>Ver historial de Mantenimientos</Button>

            <Stack
                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 8,
                    display: 'flex',
                }} component="form">

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Vehiculo</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.type}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Placa</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.plate}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Chasis</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.chasis}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Marca</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.brand}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Modelo</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.model}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Motor</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.engine_type}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Kilometraje</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.mileage}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Cilindraje</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.engine_cc}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Carga</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.chargeCapacity}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Pasajeros</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={vehicle.occupants}
                        />
                    </Grid>
                </Grid>

                <Box direction="row" alignItems="center">
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Edit</Button>
                    <Button sx={{ minWidth: '200px' }} color="error" type="submit" variant='contained'>Borrar</Button>
                </Box>
            </Stack>
        </Box>
    );
}