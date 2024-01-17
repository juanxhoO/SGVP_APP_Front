import * as React from 'react';
import Container from '@mui/material/Container';
import { Grid, Box, Paper, Card, CardMedia, Typography, CardActions, CardContent, Button, TextField, Stack } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function Stock() {

    return (

        <Grid container spacing={2}>
            <Grid item xs={6}>

                <Paper>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper>
                    <Stack direction="column"
                        sx={{
                            padding: '30px',
                        }} component="form">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>SKU</Typography>
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

                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Tipo de Repuesto:</Typography>
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


                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>Cantidad en Stock:</Typography>
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

                            <Grid item xs={12} >
                                <Typography sx={{ fontWeight: 'bold' }}>Marca del Repuesto:</Typography>
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

                            <Grid item xs={12} >
                                <Typography sx={{ fontWeight: 'bold' }}>Modelo del Vehículo:</Typography>
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
                            <Grid item xs={12} >
                                <Typography sx={{ fontWeight: 'bold' }}>Precio</Typography>
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
                            <Grid item xs={12} >
                                <Typography sx={{ fontWeight: 'bold' }}>Condición del Repuesto:</Typography>
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

                        <Button variant="contained" size='large' >Editar</Button>
                        <Button color="error" variant="contained" size='large' >Borrar</Button>

                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}