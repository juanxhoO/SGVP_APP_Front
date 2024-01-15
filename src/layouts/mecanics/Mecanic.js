import * as React from 'react';
import Container from '@mui/material/Container';
import { Stack, Grid, Typography, TextField, Button } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Mecanic() {

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
                    <Typography sx={{ fontWeight: 'bold' }}>Nombre</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>correo</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Telefono</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Ciudad</Typography>
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
            <Button sx={{ minWidth: '200px' }} color="error" type="submit" variant='contained'>Borrar</Button>

        </Stack>
    );
}