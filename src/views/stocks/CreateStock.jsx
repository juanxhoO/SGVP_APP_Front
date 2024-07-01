import * as React from 'react';
import { Grid, Card, CardMedia, Typography, CardContent, Button, TextField, Stack } from '@mui/material';
import DropFile from '../../components/DropFile';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
export default function CreateStock() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/v1/spares", data)
            navigate("/stocks")
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid container onSubmit={handleSubmit(onSubmit)}
            component="form" item xs={12} >
            <Stack sx={{width:"100%", alignItems:"center" }} spacing={3} direction="column">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Subir Imagen
                        </Typography>
                        <DropFile />
                    </CardContent>
                </Card>
            </Stack>

            <Stack direction="column"
                sx={{
                    padding: '30px',
                }}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Typography sx={{ fontWeight: 'bold' }}>SKU</Typography>
                        <TextField
                            {...register('sku', { required: "SKU es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="sku"
                            autoComplete="email"
                            autoFocusrequired
                            id="sku"
                            label="Required"
                        />
                        {errors.sku && <p>{errors.sku.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre del Repuesto:</Typography>
                        <TextField
                            {...register('name', { required: "Nombre del Repuesto es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="name"
                            autoComplete=""
                            autoFocusrequired
                            id="name"
                            label="Required"
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                    </Grid>

                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Marca del Repuesto:</Typography>
                        <TextField
                            {...register('brand', { required: "Marca del Repuesto es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="brand"
                            autoComplete="email"
                            autoFocusrequired
                            id="brand"
                            label="Required"
                        />
                        {errors.brand && <p>{errors.brand.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Stock:</Typography>
                        <TextField
                            {...register('stock', { required: "Stock de Reserva es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="stock"stock
                            type="number"
                            autoComplete="stock"
                            autoFocusrequired
                            id="stock"
                            label="Required"
                        />
                        {errors.stock && <p>{errors.stock.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Modelo del Vehículo:</Typography>
                        <TextField
                            {...register('model', { required: "Modelo del Vehículo es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="model"
                            autoComplete="model"
                            autoFocusrequired
                            id="model"
                            label="Required"
                        />
                        {errors.model && <p>{errors.model.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Precio</Typography>
                        <TextField
                            {...register('price', { required: "Apellidos es Requerido" })}
                            fullWidth
                            type="number"
                            margin="normal"
                            name="price"
                            autoComplete="price"
                            autoFocusrequired
                            id="price"
                            label="Required"
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Condición del Repuesto:</Typography>
                        <TextField
                            {...register('condition', { required: "Apellidos es Requerido" })}
                            fullWidth
                            margin="normal"

                            name="condition"
                            autoComplete="condition"
                            autoFocusrequired
                            id="condition"
                            label="Required"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </Grid>
                </Grid>
                <Button variant="contained" type="submit" size='large' >Crear Repuesto</Button>
            </Stack>
        </Grid>
    );
}