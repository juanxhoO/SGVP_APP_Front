import * as React from 'react';
import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
// TODO remove, this demo shouldn't need to reset the theme.
import useDataFetcher from '../../hooks/useDataFetcher';
import { useNavigate, useParams } from 'react-router-dom';
import useDeleteEntity from '../../hooks/useDeleteItem';
import { useForm } from 'react-hook-form'


export default function Vehicle() {
    const { error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/vehicles');
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/vehicles/" + id);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
          email: data?.email || '',
          password: '',
          name: data?.name || '',
          lastname: data?.lastname || '',
          phone: data?.phone || '',
          id_card: data?.id_card || '',
          bloodType: data?.bloodType || '',
          role: data?.role || '',
          rank: data?.rank || '',
          engine_cc: data?.engine_cc || ''
        }
      })
    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            deleteEntity(id);
        }
    };

    const onSubmit = async (data) => {
        console.log(data)
        const response = await axios.post("http://localhost:3000/v1/vehicles", data)
        console.log(response)
    }
    React.useEffect(() => {
        if (isDeleted) {
            navigate("/vehicles");
        }
    }, [isDeleted, navigate]);

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
                onSubmit={handleSubmit(onSubmit)}

                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 8,
                    display: 'flex',
                }} component="form">

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>NOmbre de Vehiculo</Typography>
                        <TextField
                            {...register('name', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="name"
                            autoComplete="type"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Vehiculo</Typography>
                        <TextField
                            {...register('type', { required: "Nombres Requerido" })}
                            fullWidth
                            margin="normal"
                            required
                            name="type"
                            autoComplete="type"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Placa</Typography>
                        <TextField
                            {...register('plate', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="plate"
                            autoComplete="plate"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Chasis</Typography>
                        <TextField
                            {...register('chasis', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="chasis"
                            autoComplete="chasis"
                            label="Required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Marca</Typography>
                        <TextField
                            {...register('brand', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="brand"
                            autoComplete="brand"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Modelo</Typography>
                        <TextField
                            {...register('model', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="model"
                            autoComplete="model"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Motor</Typography>
                        <TextField
                            {...register('engine', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="engine"
                            autoComplete="engine"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Kilometraje</Typography>
                        <TextField
                            {...register('mileage', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="mileage"
                            autoComplete="mileage"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Cilindraje</Typography>
                        <TextField
                            {...register('engine_cc', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="engine_cc"
                            autoComplete="engine_cc"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Carga</Typography>
                        <TextField
                            {...register('carringcapacity', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="carringcapacity"
                            autoComplete="carringcapacity"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Pasajeros</Typography>
                        <TextField
                            {...register('passengers', { required: "Nombres Requerido" })}

                            fullWidth
                            margin="normal"
                            required
                            name="passengers"
                            autoComplete="passengers"
                            id="outlined-required"
                            label="Required"
                        />
                    </Grid>
                </Grid>

                <Box sx={{ marginTop: "2rem" }} direction="row" alignItems="center">
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Edit</Button>
                    <Button onClick={handleDelete} sx={{ minWidth: '200px' }} color="error" variant='contained'>Borrar</Button>
                </Box>
            </Stack>
        </Box>
    );
}