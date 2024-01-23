import * as React from 'react';
import Container from '@mui/material/Container';
import { Stack, Grid, Typography, TextField, Button, Box, Card, CardMedia, CardContent } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateMecanic() {

    return (


        <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Imagen
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mapa
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>

            </Box>



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
                        <Typography sx={{ fontWeight: 'bold' }}>Direccion</Typography>
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
                <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear Mecanica</Button>

            </Stack>

        </Box>

    );
}