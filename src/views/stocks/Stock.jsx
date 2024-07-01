import * as React from 'react';
import { Grid, Paper, Card, CardMedia, Typography, CardContent, Button, TextField, Stack } from '@mui/material';
import useDataFetcher from '../../hooks/useDataFetcher';
import { useParams, useNavigate } from 'react-router-dom';
import useDeleteEntity from '../../hooks/useDeleteItem';
import DropFile from '../../components/DropFile';

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
// TODO remove, this demo shouldn't need to reset the theme.
import axios from 'axios';
export default function Stock() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: spareInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/spares/" + id);
    const { error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/spares');
    const handleDelete = () => {
        const confirmed = window.confirm('Seguro que quiere borrar el respuesto?');
        if (confirmed) {
            deleteEntity(id);
        }
    };
    const [initialValues, setInitialValues] = useState({});

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
            brand: spareInfo?.brand,
            password: '',
            name: spareInfo?.name || '',
            lastname: spareInfo?.lastname || '',
            phone: spareInfo?.phone || '',
            id_card: spareInfo?.id_card || '',
            bloodType: spareInfo?.bloodType || '',
            role: spareInfo?.role || '',
            rank: spareInfo?.rank || '',
            engine_cc: spareInfo?.engine_cc || ''
        }
    })
    useEffect(() => {
        if (spareInfo) {
            setInitialValues(spareInfo);
            reset(spareInfo);
        }
    }, [spareInfo, reset]);


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
                <Stack sx={{ width: "100%", alignItems: "center" }} spacing={3} direction="column">
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
                    onSubmit={handleSubmit(onSubmit)}

                    sx={{
                        padding: '30px',
                    }} component="form">
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Nombre del Repuesto</Typography>
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
                            <Typography sx={{ fontWeight: 'bold' }}>SKU</Typography>
                            <TextField
                                {...register('sku', { required: "Nombres Requerido" })}

                                fullWidth
                                margin="normal"
                                name="sku"
                                autoComplete="sku"
                                autoFocusrequired
                                id="outlined-required"
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
                            <Typography sx={{ fontWeight: 'bold' }}>Marca del Repuesto:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('brand', { required: "Marca es Requerido" })}
                                name="brand"
                                autoComplete="brand"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>

                        <Grid item xs={12} md={6} >
                            <Typography sx={{ fontWeight: 'bold' }}>Modelo del Vehículo:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('model', { required: "Nombres Requerido" })}
                                name="model"
                                autoComplete="model"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Typography sx={{ fontWeight: 'bold' }}>Precio</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('price', { required: "Nombres Requerido" })}
                                defaultValue={spareInfo?.price}
                                name="price"
                                autoComplete="price"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 'bold' }}>Condición del Repuesto:</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                {...register('condition', { required: "Nombres Requerido" })}

                                name="condition"
                                autoComplete="condition"
                                autoFocusrequired
                                id="outlined-required"
                            />
                        </Grid>
                    </Grid>
                    <Stack direction="row" justifyContent="space-around" >
                        <Button size="large" type="submit" variant='contained'>Editar Repuesto</Button>
                        <Button size="large" variant='contained' onClick={handleDelete} color="error">Borrar Repuesto</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Grid>
    );
}