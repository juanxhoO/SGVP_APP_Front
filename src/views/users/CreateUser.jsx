import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateUser() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(watch("name")) // watch input value by passing the name of it

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
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Tipo de Sangre:</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        {...register('bloodtype', { required: "Tipo de Sangre es Requerido" })}
                        name="bloodtype"
                        autoFocusrequired
                        id="bloodtype"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.bloodtype && <p>{errors.bloodtype.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Fecha de Nacimiento:</Typography>
                    <TextField
                        fullWidth
                        {...register('birthdate', { required: "Fecha de  Requerido" })}
                        margin="normal"
                        name="birthdate"
                        autoFocusrequired
                        id="birthdate"
                        label="Required"
                        defaultValue=""
                    />
                    {errors.birthdate && <p>{errors.birthdate.message}</p>}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Ciudad  de Nacimiento:</Typography>
                    <TextField
                        fullWidth
                        {...register('city', { required: "Ciudad de Nacimiento Requerida" })}
                        margin="normal"
                        name="city"
                        autoComplete="city"
                        autoFocusrequired
                        id="city"
                        label="Required"
                        defaultValue=""

                    />
                    {errors.city && <p>{errors.city.message}</p>}

                </Grid>
            </Grid>
            <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear</Button>
        </Stack>
    );
}