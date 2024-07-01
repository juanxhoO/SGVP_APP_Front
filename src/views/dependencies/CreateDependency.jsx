import * as React from 'react';
import { MenuItem, Select, TextField, Grid, Typography, Card, CardMedia, CardContent, Paper, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form'
import useDataFetcher from '../../hooks/useDataFetcher';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function CreateDependency() {

    const navigate = useNavigate()
    const { data: citiesInfo } = useDataFetcher("http://localhost:3000/v1/cities/");
    const { data: circuitsInfo } = useDataFetcher("http://localhost:3000/v1/circuits/");
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const postData = {
            ...data,
            image: "dssdsd" // Include the uploaded image ID
        };

        try {
            const response = await axios.post("http://localhost:3000/v1/circuits", postData)
            console.log(response)
            if (response.status === 201) {
                navigate("/dependencies")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid p={4} m={2} container spacing={2}>
            <Grid
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                xs={12}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h2">Crear Dependencia</Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                            id="image"
                            name="image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid mt={4} item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Ciudad</Typography>
                        <Controller
                            name="cityId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                name="cityId"
                                {...field}
                                defaultValue=''
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    {citiesInfo?.map((city, index) => (
                                        <MenuItem key={index} value={city?.id}>{city?.name}</MenuItem>
                                    ))}
                                </Select>
                            )}
                        />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre del Circuito</Typography>
                        <TextField
                            {...register('name', { required: "Nombre es Requerido" })}
                            fullWidth
                            margin="normal"
                            autoComplete="name"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Codigo de Circuito</Typography>
                        <TextField
                            {...register('code', { required: "Codigo Requerido" })}
                            fullWidth
                            margin="normal"
                            autoComplete="role"
                        />
                        {errors.code && <p>{errors.code.message}</p>}
                    </Grid>
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear Circuito</Button>
                </Paper>
            </Grid>
        </Grid>
    );
}