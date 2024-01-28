import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function User() {

    const user = {
        "email": "example@email.com",
        "name": "John",
        "lastname": "Doe",
        "phone": "1234567890",
        "idCard": "AB123456",
        "password": "securePassword",
        "id_card": "987654321",
        "birthday": "1990-01-01T00:00:00Z",
        "bloodType": "O+",
        "vehicle": [],
        "role": "USER",
        "isEmailVerified": false
      }
       

    return (
        <Stack
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
            }} component="form">
            <Box>

                <Typography variant='h2'>User 1</Typography>
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Lizard
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>

                    <Typography sx={{ fontWeight: 'bold' }}>Nombres</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Apellidos</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>CI</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Tipo de Sangre:</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Fecha de Nacimiento:</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Ciudad  de Nacimiento:</Typography>
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