import * as React from 'react';
import { Grid, Box, Typography, Button, TextField, Stack } from '@mui/material';
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useAuthStore from "../../store/useAuthStore";
import dayjs from 'dayjs';

export default function CreateLubricant() {

    const userId = useAuthStore(state => state.userId)
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            data.userId = userId;
            console.log(data)
            const response = await axios.post("http://localhost:3000/v1/lubricants", data)
            navigate("/lubricants")
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid container onSubmit={handleSubmit(onSubmit)}
            component="form" item xs={12} >

            <Stack direction="column"
                sx={{
                    padding: '30px',
                }}>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h3">
                        Ingreso de Lubricante
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre del Lubricante:</Typography>
                        <TextField
                            {...register('name', { required: "Nombre del Lubricante es Requerido" })}
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
                        <Typography sx={{ fontWeight: 'bold' }}>Precio:</Typography>
                        <TextField
                            {...register('price', { required: "Precio del Lubricante es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="price"
                            autoComplete="price"
                            autoFocusrequired
                            id="price"
                            label="Required"
                        />
                        {errors.brand && <p>{errors.brand.message}</p>}

                    </Grid>

                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Marca:</Typography>
                        <TextField
                            {...register('brand', { required: "Marca del Lubricante es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="brand"
                            autoComplete="brand"
                            autoFocusrequired
                            id="brand"
                            label="Required"
                        />
                        {errors.brand && <p>{errors.brand.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Stock:</Typography>
                        <TextField
                            {...register('stock', { required: "Stock de Lubricante es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="stock" stock
                            type="number"
                            autoComplete="stock"
                            autoFocusrequired
                            id="stock"
                            label="Required"
                        />
                        {errors.stock && <p>{errors.stock.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Proveedor:</Typography>
                        <TextField
                            {...register('provider', { required: "Proveedor del Lubricante es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="provider"
                            autoFocusrequired
                            id="provider"
                            label="Required"
                        />
                        {errors.model && <p>{errors.model.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Cantidad</Typography>
                        <TextField
                            {...register('quantity', { required: "Cantidad del Lubricante es Requerido" })}
                            fullWidth
                            type="number"
                            margin="normal"
                            name="quantity"
                            autoComplete="quantity"
                            autoFocusrequired
                            id="quantity"
                            label="Required"
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Lubricante</Typography>
                        <TextField
                            {...register('type', { required: "Tipo de Lubricante  es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="type"
                            autoComplete="type"
                            autoFocusrequired
                            id="type"
                            label="Required"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Typography sx={{ fontWeight: 'bold' }}>Viscosidad</Typography>
                        <TextField
                            {...register('viscosity', { required: "Viscosidad del Lubricante es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="viscosity"
                            autoComplete="viscosity"
                            autoFocusrequired
                            id="viscosity"
                            label="Required"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography sx={{ fontWeight: 'bold' }}>Fecha de Expiracion:</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Controller
                                name="expireDate"
                                control={control}
                                defaultValue={null}
                                render={({ field: { onChange, value } }) => (
                                    <DatePicker
                                        fullWidth
                                        value={value ? dayjs(value) : null}
                                        onChange={(newValue) => onChange(newValue ? dayjs(newValue).toISOString() : null)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        {errors.expireDate && <p>{errors.expireDate.message}</p>}
                    </Grid>
                </Grid>
                <Box>
                    <Button sx={{ mt: 3 }} variant="contained" type="submit" size='large' >Crear Lubricante</Button>
                </Box>
            </Stack>


        </Grid>
    );
}