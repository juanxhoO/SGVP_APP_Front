import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDeleteEntity from '../../hooks/useDeleteItem';
import EntitiesAsignation from './components/EntitiesAsignation';
export default function User() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: userInfo } = useDataFetcher("http://localhost:3000/v1/users/" + id);
    const { data: subCircuits } = useDataFetcher("http://localhost:3000/v1/subcircuits/");
    const { data: vehicles } = useDataFetcher("http://localhost:3000/v1/vehicles/");
    const OfficeRank = ["TENIENTE_CORONEL", "SARGENTO_PRIMERO", "SARGENTO_SEGUNDO", "CABO_PRIMERO", "CABO_SEGUNDO", "TENIENTE", "MAYOR", "CAPITAN", "POLICIA", "SUBTENIENTE"];
    const {
        register,
        control,
        handleSubmit,
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
            city: '',
            vehicleId: '',
            subcircuitId: ''
        }
    });
    
    const [initialValues, setInitialValues] = useState({});
    useEffect(() => {
        if (userInfo) {
            const { name, lastname, phone, id_card, bloodType, role, rank, email, birthdate, city, vehicleId, subcircuitId } = userInfo;
            const filteredData = { name, lastname, phone, id_card, bloodType, role, rank, email, birthdate, city, vehicleId, subcircuitId };
            setInitialValues(filteredData);
            reset(filteredData);
        }
    }, [userInfo, reset]);

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
        <Grid container>
            <Stack
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 2,
                    display: 'flex',
                }} component="form">
                <Box>
                    <Typography variant="h1">Editar Usuario</Typography>
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
                            type="number"
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
                            type='number'
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
                            {...register('city', { required: "Ciudad de Nacimiento Requerida" })}
                            fullWidth
                            margin="normal"
                            autoComplete="city"
                        />
                        {errors.city && <p>{errors.city.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Rango</Typography>
                        <Controller
                            control={control}
                            name="rank"
                            render={({ field }) => (
                                <Select
                                    fullWidth
                                    {...field}
                                    defaultValue={userInfo?.rank}
                                >
                                    {OfficeRank?.map((rank, index) => (
                                        <MenuItem key={index} value={rank}>{rank}</MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Role</Typography>

                        <Controller
                            control={control}
                            name="role"
                            render={({ field }) => (
                                <Select
                                    fullWidth
                                    {...field}
                                    defaultValue={userInfo?.role}
                                >  <MenuItem value="USER">Usuario</MenuItem>
                                    <MenuItem value="ADMIN">Administrador</MenuItem>
                                </Select>
                            )}
                        />                    </Grid>
                </Grid>
                <Box display="flex" sx={{gap:"2rem"}} mt={4}>
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Editar</Button>
                    <Button onClick={handleDelete} sx={{ minWidth: '200px' }} color="error" variant='contained'>Borrar</Button>
                </Box>
            </Stack>
            <EntitiesAsignation subCircuits={subCircuits} vehicles={vehicles} />
        </Grid>
    );
}
