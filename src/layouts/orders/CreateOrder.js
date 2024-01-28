import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, Paper, CardContent, CardActions, MenuItem, FormControl, Select, InputLabel } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateOrder() {
    return (
        <Box
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
            }}>

            <Typography variant='h2'>
                Crear Orden de Mantenimiento
            </Typography>
            <Box display="flex" direction="row">
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

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Vehiculo</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Vehiculo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="test"
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Usuario</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Usuario</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="test"
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
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
        </Box>
    );
}