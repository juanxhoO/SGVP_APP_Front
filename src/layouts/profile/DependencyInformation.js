import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function DependencyInormation() {
    return (
        <Grid sx={{ p: 5 }} container spacing={3} alignItems="center">
            <Grid item>
                <Box height="100%" mt={0.5} lineHeight={1}>
                    <Typography variant="h5" fontWeight="medium">
                        Dependency                 </Typography>
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
                            <CardActions>
                                <Button variant="contained" size="small">Detalles Vehiculo</Button>
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
                                <CardActions>
                                    <Button variant="contained" size="small">Solicitar Mantenimiento</Button>
                                    <Button variant="contained" size="small">historial de Mantenimientos</Button>
                                </CardActions>
                            </Card>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}