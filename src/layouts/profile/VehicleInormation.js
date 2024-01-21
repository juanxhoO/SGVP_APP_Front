import * as React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function VehicleInormation() {
    return (
        <Grid sx={{ p: 5 }} container spacing={3} alignItems="center">
            <Grid item>
                <Box height="100%" mt={0.5} lineHeight={1}>
                    <Typography variant="h5" fontWeight="medium">
                        Vehicles                    </Typography>
                    <Typography variant="button" color="text" fontWeight="regular">
                        CEO / Co-Founder
                    </Typography>
                    <Box>
                        <Card>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mazda x1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Button component={Link} to="/vehicles/1" variant="contained" size="large">Detalles Vehiculo</Button>
                            </CardActions>
                        </Card>

                        <Card >
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mantenimientos
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center'}}> 
                                <Button  component={Link} to="/orders/create" variant="contained" size="large">Solicitar Mantenimiento</Button>
                                <Button component={Link} to="/vehicles/1" variant="contained" size="large">historial de Mantenimientos</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}