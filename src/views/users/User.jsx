import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDeleteEntity from '../../hooks/useDeleteItem';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function User() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: userInfo } = useDataFetcher("http://localhost:3000/v1/users/" + id);
    const { data: subCircuits } = useDataFetcher("http://localhost:3000/v1/subcircuits/");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            name: '',
            lastname: '',
            phone: '',
            id_card: '',
            bloodType: '',
            role: '',
            rank: '',
            email: '',
            birthdate: '',
            cityId: '',
        }
    });

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        if (userInfo) {
            setInitialValues(userInfo);
            reset(userInfo);
        }
    }, [userInfo, reset]);

    const watchedFields = watch();

    const onSubmit = async (formData) => {
        console.log(formData)
        const modifiedData = {};
        for (const key in formData) {
            if (formData[key] !== initialValues[key]) {
                modifiedData[key] = formData[key];
            }
        }
        if (Object.keys(modifiedData).length > 0) {
            await axios.patch("http://localhost:3000/v1/users/" + id, modifiedData);
        }
    };

    const { isLoading, error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/users');

    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            deleteEntity(id);
        }
    };

    useEffect(() => {
        if (isDeleted) {
            navigate("/users");
        }
    }, [isDeleted, navigate]);

    return (
        <Stack
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">
            <Box>
                <Typography>Editar Usuario</Typography>
                <Card>
                    <CardMedia
                        component="img"
                        alt="User Image"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            User Information
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Nombres</Typography>
                    <TextField
                        {...register('name', { required: "Nombres Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="name"
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Apellidos</Typography>
                    <TextField
                        {...register('lastname', { required: "Apellidos es Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="lastname"
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>CI</Typography>
                    <TextField
                        {...register('id_card', { required: "Cedula de Ciudadania Requerida" })}
                        fullWidth
                        margin="normal"
                        autoComplete="id_card"
                    />
                    {errors.id_card && <p>{errors.id_card.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Correo</Typography>
                    <TextField
                        {...register('email', { required: "Correo Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Telefono</Typography>
                    <TextField
                        {...register('phone', { required: "Telefono es Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="phone"
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Tipo de Sangre</Typography>
                    <TextField
                        {...register('bloodType', { required: "Tipo de Sangre es Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="bloodType"
                    />
                    {errors.bloodType && <p>{errors.bloodType.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Fecha de Nacimiento</Typography>
                    <TextField
                        {...register('birthdate', { required: "Fecha de Nacimiento Requerida" })}
                        fullWidth
                        margin="normal"
                        autoComplete="birthdate"
                    />
                    {errors.birthdate && <p>{errors.birthdate.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Ciudad de Nacimiento</Typography>
                    <TextField
                        {...register('cityId', { required: "Ciudad de Nacimiento Requerida" })}
                        fullWidth
                        margin="normal"
                        autoComplete="cityId"
                    />
                    {errors.cityId && <p>{errors.cityId.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Rank</Typography>
                    <TextField
                        {...register('rank', { required: "Rank Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="rank"
                    />
                    {errors.rank && <p>{errors.rank.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Role</Typography>
                    <TextField
                        {...register('role', { required: "Role Requerido" })}
                        fullWidth
                        margin="normal"
                        autoComplete="role"
                    />
                    {errors.role && <p>{errors.role.message}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Asignar Subcircuito</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        {subCircuits?.map((subCircuit, index) => (
                            <MenuItem value={10}>Ten</MenuItem>
                        ))}
                    </Select>
                </Grid>

            </Grid>
            <Box>
                <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Editar</Button>
                <Button onClick={handleDelete} sx={{ minWidth: '200px' }} color="error" variant='contained'>Borrar</Button>
            </Box>
        </Stack>
    );
}
