import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';



export default function Vehicle() {


    const {data,isLoading, isError} = useDataFetcher("http://localhost:3000/v1/vehicles/64e2c545-7235-4386-b138-d10336251a00");

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data?.name}
                        </Typography>
                    </CardContent>
                </Card>

            </Box>

            <Button sx={{ minWidth: '200px' }} type="submit" component={Link} to='/vehicles/1/history/' variant='contained'>Ver historial de Mantenimientos</Button>

            <Stack
                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 8,
                    display: 'flex',
                }} component="form">

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Vehiculo</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.type}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Placa</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.plate}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Chasis</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.chasis}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Marca</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.brand}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Modelo</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.model}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Motor</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.engine_type}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Kilometraje</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.mileage}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Cilindraje</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.engine_cc}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Carga</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.carringcapacity}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Pasajeros</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            autoComplete="email"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            value={data?.passengers}
                        />
                    </Grid>
                </Grid>

                <Box sx={{marginTop:"2rem"}} direction="row" alignItems="center">
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Edit</Button>
                    <Button sx={{ minWidth: '200px' }} color="error" type="submit" variant='contained'>Borrar</Button>
                </Box>
            </Stack>
        </Box>
    );
}