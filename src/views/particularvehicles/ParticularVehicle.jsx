import * as React from 'react';
import { Grid, Typography, Select, MenuItem, TextField, Box, Stack, Button, Card, CardMedia, CardContent, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';
import { useNavigate, useParams } from 'react-router-dom';
import useDeleteEntity from '../../hooks/useDeleteItem';
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from 'react';

export default function ParticularVehicle() {
    const { error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/privatevehicles');
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: vehicleInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/privatevehicles/" + id);
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            brand: vehicleInfo?.brand || '',
            password: '',
            type: vehicleInfo?.type,
            name: vehicleInfo?.name || '',
            lastname: vehicleInfo?.lastname || '',
            phone: vehicleInfo?.phone || '',
            id_card: vehicleInfo?.id_card || '',
            bloodType: vehicleInfo?.bloodType || '',
            role: vehicleInfo?.role || '',
            rank: vehicleInfo?.rank || '',
            engine_cc: vehicleInfo?.engine_cc || ''
        }
    })
    const [initialValues, setInitialValues] = useState({});

    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            deleteEntity(id);
        }
    };

    const onSubmit = async (data) => {
        // Define the fields accepted in the POST request
        const acceptedFields = ['brand', 'name', 'type', 'lastname', 'phone', 'id_card', 'bloodType', 'role', 'rank', 'engine_cc'];

        const editedFields = Object.keys(data).reduce((acc, key) => {
            if (data[key] !== initialValues[key] && acceptedFields.includes(key)) {
                acc[key] = data[key];
            }
            return acc;
        }, {});

        console.log(editedFields)
        if (Object.keys(editedFields).length > 0) {
            const response = await axios.patch("http://localhost:3000/v1/vehicles/" + id, editedFields);
            if (response.status === 201) {
                console.log("dsds")
            }
        }
    };
    React.useEffect(() => {
        if (isDeleted) {
            navigate("/vehicles");
        }
    }, [isDeleted, navigate]);
    const [vehicleType, setVehicleType] = useState('');

    const handleChange = (event) => {
        console.log("change")
        console.log(event.target.value)
        setVehicleType(event.target.value);
    };

    useEffect(() => {
        if (vehicleInfo) {
            setInitialValues(vehicleInfo);
            setVehicleType(vehicleInfo?.type);

            reset(vehicleInfo);
        }
    }, [vehicleInfo, reset]);
    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
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

                <Box>
                    <Button sx={{ minWidth: '200px' }} type="submit" component={Link} to='/vehicles/1/history/' variant='contained'>Ver historial de Mantenimientos</Button>
                </Box>
            </Box>
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
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre de Vehiculo</Typography>
                        <TextField
                            {...register('name', { required: "Nombres Requerido" })}
                            fullWidth
                            margin="normal"
                            name="name"
                            autoComplete="type"
                            id="outlined-required"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Vehiculo</Typography>
                        <Controller
                            name="type"
                            control={control}
                            defaultValue={vehicleInfo?.type}
                            rules={{ required: "Tipo de Vehiculo es Requerido" }}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <Select
                                        {...field}
                                        onChange={(event) => {
                                            field.onChange(event);
                                            setVehicleType(event.target.value);
                                        }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Tipo de Vehiculo"
                                        value={vehicleType}
                                    >
                                        <MenuItem value="AUTOMOVIL">Automovil</MenuItem>
                                        <MenuItem value="CAMIONETA">Camioneta</MenuItem>
                                        <MenuItem value="MOTOCICLETA">Motocicleta</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Placa</Typography>
                        <TextField

                            {...register('plate', { required: "Nombres Requerido" })}
                            fullWidth
                            margin="normal"
                            name="plate"
                            autoComplete="plate"
                            id="outlined-required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Chasis</Typography>
                        <TextField
                            {...register('chasis', { required: "Nombres Requerido" })}
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
                            type='number'
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
                            type='number'
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
                            type='number'
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
                            type='number'
                            fullWidth
                            margin="normal"
                            name="passengers"
                            autoComplete="passengers"
                            id="outlined-required"
                        />
                    </Grid>
                </Grid>

                <Box sx={{ justifyContent:"space-around", display:"flex", width:"100%", marginTop: "2rem" }} direction="row" alignItems="center">
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Edit</Button>
                    <Button onClick={handleDelete} sx={{ minWidth: '200px' }} color="error" variant='contained'>Borrar</Button>
                </Box>
            </Stack>
        </Box>
    );
}