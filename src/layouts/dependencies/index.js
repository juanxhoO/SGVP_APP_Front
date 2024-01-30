import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper, MenuList, MenuItem, Card, CardContent, Stack, CardMedia } from '@mui/material';
// TODO remove, this demo shouldn't need to reset the theme.
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dependencies() {

    const Parroquias = ["VILCABAMBA(VICTORIA)", "QUINARA", "MALACATOS(VALLADOLID)", "CHUQUIRIBAMBA", "TAQUIL(MIGUELRIOFRIO", "Loja", "EL TAMBO", "CATAMAYO (LATOMA)", "ZAMBI", "SANPEDRODE LABENDITA", "CHAGUARPAMBA"];
    const navigate = useNavigate();

    const handleDependencyNavigate = () => {
        console.log('');
        navigate('/dependencies/1');
    }


    return (
        <Box>
            <Typography variant='h3'>
                Dependencias
            </Typography>
            <Grid p={4} container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <MenuList>
                            {Parroquias.map((parroquia, index) => (
                                <MenuItem sx={{ padding: '10px' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {parroquia}
                                    </Typography>
                                </MenuItem>

                            ))}
                        </MenuList>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Vilcabamba                            </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    dsdsd
                                </Typography>
                            </CardContent>
                        </Card>
                        <Typography>
                            Subcircuitos
                        </Typography>
                        <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
                            <Card onClick={handleDependencyNavigate} sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card onClick={handleDependencyNavigate} sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card onClick={handleDependencyNavigate} sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card onClick={handleDependencyNavigate} sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Stack>
                    </Paper>
                    {/* <Box sx={{ marginTop: "2rem", justifyContent: "end", display: "flex" }}>
                        <Button component={Link} size="large" to="/dependencies/create" variant="contained">Crear Circuito</Button>
                    </Box> */}
                </Grid>
            </Grid>
        </Box>
    );
}