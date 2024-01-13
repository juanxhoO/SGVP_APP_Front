import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Vehicle() {

    return (
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
                    sx={{ minWidth: "400px" }}
                    margin="normal"
                    required
                    disabled
                    name="email"
                    autoComplete="email"
                    autoFocusrequired
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                />
            </Grid>


            <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 'bold' }}>Placa</Typography>
                <TextField
                    fullWidth
                    sx={{ minWidth: "400px" }}
                    margin="normal"
                    required
                    name="email"
                    autoComplete="email"
                    autoFocusrequired
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
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
                    defaultValue="Hello World"
                />
            </Grid>
        </Grid>
        <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Edit</Button>
    </Stack>

    );
}