import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form'
// TODO remove, this demo shouldn't need to reset the theme.
import { useNavigate } from 'react-router-dom';
export default function CreateMaintenance() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {

        const postData = {
            ...data,
            price: parseFloat(data.price),
        };
        try {
            const response = await axios.post("http://localhost:3000/v1/maintenances", postData)
            if (response.status === 201) {
                navigate("/maintenances")
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <Stack
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">

            <Grid container spacing={2}>
                <Typography variant="h1">
                    Crear Mantenimiento
                </Typography>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Nombre del Mantenimiento:</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        {...register('name', { required: "Nombre de Mantenimiento  es Requerido" })}
                        name="name"
                        id="name"
                        label="Required"
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Precio:</Typography>
                    <TextField
                        fullWidth
                        {...register('price', { required: "Precio de Mantenimiento Requerido" })}
                        margin="normal"
                        name="price"
                        type="number"
                        id="price"
                        label="Required"
                    />
                    {errors.price && <p>{errors.price.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Descripcion:</Typography>
                    <TextField
                        fullWidth
                        {...register('details', { required: "Descripcion del Mantenimiento es Requerido" })}
                        margin="normal"
                        name="details"
                        id="details"
                        label="Required"

                    />
                    {errors.details && <p>{errors.city.details}</p>}
                </Grid>
            </Grid>
            <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear</Button>
        </Stack>
    );
}