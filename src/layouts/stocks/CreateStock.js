import * as React from 'react';
import { Grid, Box, Paper, Card, CardMedia, Typography, CardContent, Button, TextField, Stack } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateStock() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Paper>
                    <Box>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Imagen del Repuesto
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
                                    Subir Imagen
                                </Typography>

                            </CardContent>
                        </Card>
                    </Box>

                    <Stack direction="column"
                        sx={{
                            padding: '30px',
                        }} component="form">
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <Typography sx={{ fontWeight: 'bold' }}>SKU</Typography>
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

                            <Grid item xs={12} md={6}>
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


                            <Grid item md={6} xs={12}>
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

                            <Grid item md={6} xs={12} >
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

                            <Grid item md={6} xs={12} >
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
                            <Grid item md={6} xs={12} >
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
                            <Grid item md={6} xs={12} >
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

                        <Button variant="contained" size='large' >Crear Repuesto</Button>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}