import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, Paper, CardContent, CardActions } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateOrder() {
    return (
        <Stack
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">


            <Typography>
                Crear Orden de Mantenimiento
            </Typography>


            <Stack spacing={2} direction="row">

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
            </Stack>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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
                    <Typography sx={{ fontWeight: 'bold' }}>Input2:</Typography>
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
            <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Generar Orden de Mantenimiento</Button>
        </Stack>
    );
}