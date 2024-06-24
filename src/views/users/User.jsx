import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import useDeleteEntity from '../../hooks/useDeleteItem';

// TODO remove, this demo shouldn't need to reset the theme.
export default function User() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data } = useDataFetcher("http://localhost:3000/v1/users/" + id);

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
        }})
        
    const onSubmit = async (data) => {
        const response = await axios.post("http://localhost:3000/v1/users", data)
    }

    const { isLoading, error, isDeleted, deleteEntity } = useDeleteEntity('http://localhost:3000/v1/users');

    const handleDelete = () => {
      const confirmed = window.confirm('Are you sure you want to delete this user?');
      if (confirmed) {
        deleteEntity(id);
      }
    };        
    React.useEffect(() => {
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
                <Typography>Crear Usuario</Typography>
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Lizard
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
                        name="name"
                        autoComplete="name"
                        id="name"
                        label="Required"
                        value={data?.name}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Apellidos</Typography>
                    <TextField
                        {...register('lastname', { required: "Apellidos es Requerido" })}

                        fullWidth
                        margin="normal"
                        name="lastname"
                        autoComplete="lastname"
                        autoFocusrequired
                        id="lastname"
                        label="Required"
                        value={data?.lastname}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>CI</Typography>
                    <TextField
                        {...register('id_card', { required: "Cedula de Ciudadania  Requerida" })}

                        fullWidth
                        margin="normal"
                        name="id_card"
                        autoComplete="id_card"
                        autoFocusrequired
                        id="id_card"
                        label="Required"
                        value={data?.id_card}
                    />
                    {errors.id_card && <p>{errors.id_card.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>correo</Typography>
                    <TextField
                        {...register('email', { required: "Correo Requerido" })}
                        fullWidth
                        margin="normal"
                        name="email"
                        autoComplete="email"
                        autoFocusrequired
                        id="email"
                        label="Required"
                        value={data?.email}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Telefono</Typography>
                    <TextField
                        fullWidth
                        {...register('phone', { required: "Telefono es  Requerido" })}
                        margin="normal"
                        name="phone"
                        autoComplete="email"
                        autoFocusrequired
                        id="outlined-required"
                        label="Required"
                        value={data?.phone}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Tipo de Sangre:</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        {...register('bloodType', { required: "Tipo de Sangre es Requerido" })}
                        name="bloodType"
                        id="bloodType"
                        label="Required"
                        value={data?.bloodType}
                    />
                    {errors.bloodType && <p>{errors.bloodType.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Fecha de Nacimiento:</Typography>
                    <TextField
                        fullWidth
                        {...register('birthdate', { required: "Fecha de  Requerido" })}
                        margin="normal"
                        name="birthdate"
                        id="birthdate"
                        label="Required"
                        value={data?.birthdate}
                    />
                    {errors.birthdate && <p>{errors.birthdate.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Ciudad  de Nacimiento:</Typography>
                    <TextField
                        fullWidth
                        {...register('cityId', { required: "Ciudad de Nacimiento Requerida" })}
                        margin="normal"
                        name="cityId"
                        id="cityId"
                        label="Required"
                        value={data?.city}
                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Rank:</Typography>
                    <TextField
                        fullWidth
                        {...register('rank', { required: "Rol  Requerida" })}
                        margin="normal"
                        name="rank"
                        autoFocusrequired
                        id="rank"
                        label="Required"
                        value={data?.rank}
                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </Grid>
            </Grid>


            <Box>
                <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Editar</Button>
                <Button onClick={handleDelete} sx={{ minWidth: '200px' }} color="error" variant='contained'>Borrar</Button>
            </Box>

        </Stack>
    );
}