import * as React from 'react';
import { Grid, Paper, Box, CardMedia, Typography, CardContent, Button, TextField, Stack } from '@mui/material';
import useDataFetcher from '../../hooks/useDataFetcher';
import { useParams, useNavigate } from 'react-router-dom';
import useDeleteEntity from '../../hooks/useDeleteItem';
import DropFile from '../../components/DropFile';

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
// TODO remove, this demo shouldn't need to reset the theme.
import axios from 'axios';
export default function Lubricant() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: lubricantInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/lubricants/" + id);
    const { error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/lubricants');
    const handleDelete = () => {
        const confirmed = window.confirm('Seguro que quiere borrar el lubricante?');
        if (confirmed) {
            deleteEntity(id);
        }
    };
    const [initialValues, setInitialValues] = useState({});

    console.log(lubricantInfo)
    React.useEffect(() => {
        if (isDeleted) {
            navigate("/stocks");
        }
    }, [isDeleted, navigate]);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            brand: lubricantInfo?.brand,
            name: lubricantInfo?.name || '',
            expireDate: lubricantInfo?.expireDate || '',
            price: lubricantInfo?.price || '',
            provider: lubricantInfo?.provider || '',
            quantity: lubricantInfo?.quantity || '',
            stock: lubricantInfo?.stock || '',
            type: lubricantInfo?.type || '',
            viscosity: lubricantInfo?.viscosity || ''
        }
    })
    useEffect(() => {
        if (lubricantInfo) {
            setInitialValues(lubricantInfo);
            reset(lubricantInfo);
        }
    }, [lubricantInfo, reset]);


    const onSubmit = async (formData) => {
        console.log(formData)
        const modifiedData = {};
        for (const key in formData) {
            if (formData[key] !== initialValues[key]) {
                modifiedData[key] = formData[key];
            }
        }
        if (Object.keys(modifiedData).length > 0) {
            await axios.patch("http://localhost:3000/v1/spares/" + id, modifiedData);
        }
    };
    return (
        <Grid container xs={12} md={12}>
            <Paper>
                <Stack direction="column"
                    onSubmit={handleSubmit(onSubmit)}

                    sx={{
                        padding: '30px',
                    }} component="form">
                    <Box>
                        <Typography sx={{ mb: 4 }} variant="h4">
                            Lubricante id: {lubricantInfo?.id}
                        </Typography>
                        <Typography>
                            Ingresado por: {lubricantInfo?.user?.name}  {lubricantInfo?.user?.lastname}
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Nombre del Lubricante</Typography>
                            <TextField
                                {...register('name', { required: "Nombres Requerido" })}

                                fullWidth
                                margin="normal"
                                name="name"
                                autoComplete="name"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Marca del Lubricante</Typography>
                            <TextField
                                {...register('brand', { required: "Nombres Requerido" })}
                                fullWidth
                                margin="normal"
                                name="brand"
                                autoComplete="brand"
                                autoFocusrequired
                                id="brand"
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Cantidad en Stock:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('stock', { required: "Nombres Requerido" })}

                                name="stock"
                                autoComplete="stock"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Tipo de Lubricante:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('type', { required: "Marca es Requerido" })}
                                name="type"
                                autoComplete="type"
                                autoFocusrequired
                                id="type"
                            />
                        </Grid>

                        <Grid item xs={12} md={6} >
                            <Typography sx={{ fontWeight: 'bold' }}>Viscosidad del Lubricante:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('viscosity', { required: "Nombres Requerido" })}
                                name="viscosity"
                                autoComplete="viscosity"
                                autoFocusrequired
                                id="viscosity"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Typography sx={{ fontWeight: 'bold' }}>Precio</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('price', { required: "Nombres Requerido" })}
                                defaultValue={lubricantInfo?.price}
                                name="price"
                                autoComplete="price"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Proveedor del Lubricante:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('provider', { required: "Nombres Requerido" })}

                                name="provider"
                                autoComplete="provider"
                                autoFocusrequired
                                id="provider"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Cantidad de Lubricante (LTS):</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('quantity', { required: "Nombres Requerido" })}

                                name="quantity"
                                autoComplete="quantity"
                                autoFocusrequired
                                id="quantity"
                            />
                        </Grid>
                    </Grid>
                    <Stack  sx={{mt:4}} direction="row" justifyContent="space-around" >
                        <Button size="large" type="submit" variant='contained'>Actualizar Lubricante</Button>
                        <Button size="large" variant='contained' onClick={handleDelete} color="error">Borrar Lubricante</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Grid>
    );
}