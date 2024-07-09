import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';

export default function Bonus() {
    const { id } = useParams()
    const { data: vehicleInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/contracts/" + id);
    console.log(vehicleInfo)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            brand: vehicleInfo?.brand || '',
            name: vehicleInfo?.name || '',
            lastname: vehicleInfo?.lastname || '',
            phone: vehicleInfo?.phone || '',
        }
    })

    const [initialValues, setInitialValues] = useState({});

    const onSubmit = async (vehicleInfo) => {
        const response = await axios.post("http://localhost:3000/v1/vehicles", vehicleInfo)
    }

    useEffect(() => {
        if (vehicleInfo) {
            setInitialValues(vehicleInfo);
            reset(vehicleInfo);
        }
    }, [vehicleInfo, reset]);
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
                            {vehicleInfo?.name}
                        </Typography>
                    </CardContent>
                </Card>

            </Box>

            <Button sx={{ minWidth: '200px' }} type="submit" component={Link} to='/vehicles/1/history/' variant='contained'>Ver historial de Mantenimientos</Button>

            <Stack
                onSubmit={handleSubmit(onSubmit)}

                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 8,
                    display: 'flex',
                }} component="form">

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre del Contrato</Typography>
                        <TextField
                            {...register('name', { required: "Nombres Requerido" })}
                            defaultValue={vehicleInfo?.name}
                            fullWidth
                            margin="normal"
                            name="name"
                            autoComplete="type"
                            id="outlined-required"
                        />
                    </Grid>
                

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Contrato</Typography>
                        <TextField
                            {...register('type', { required: "Nombres Requerido" })}
                            defaultValue={vehicleInfo?.type}
                            fullWidth
                            margin="normal"
                            name="plate"
                            autoComplete="plate"
                            id="outlined-required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Detalles del Contrato</Typography>
                        <TextField
                            {...register('details', { required: "Nombres Requerido" })}
                            
                            fullWidth
                            margin="normal"
                            name="chasis"
                            autoComplete="chasis"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Marca</Typography>
                        <TextField
                            {...register('brand', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="brand"
                            autoComplete="brand"
                            id="outlined-required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Modelo</Typography>
                        <TextField
                            {...register('model', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="model"
                            autoComplete="model"
                            id="outlined-required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Motor</Typography>
                        <TextField
                            {...register('engine', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="engine"
                            autoComplete="engine"
                            id="outlined-required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Kilometraje</Typography>
                        <TextField
                            {...register('mileage', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="mileage"
                            autoComplete="mileage"
                            id="outlined-required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Cilindraje</Typography>
                        <TextField
                            {...register('engine_cc', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="engine_cc"
                            autoComplete="engine_cc"
                            id="outlined-required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Carga</Typography>
                        <TextField
                            {...register('carringcapacity', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="carringcapacity"
                            autoComplete="carringcapacity"
                            id="outlined-required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Pasajeros</Typography>
                        <TextField
                            {...register('passengers', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            name="passengers"
                            autoComplete="passengers"
                            id="outlined-required"
                        />
                    </Grid>
                </Grid>

                <Box sx={{ marginTop: "2rem" }} direction="row" alignItems="center">
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Edit</Button>
                </Box>
            </Stack>
        </Box>
    );
}