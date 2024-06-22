import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import DropFile from '../../components/DropFile';
import { useForm } from 'react-hook-form'

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateVehicle() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(watch("name")) // watch input value by passing the name of it

    return (
        <Box sx={{ p: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <DropFile />
                    </CardContent>
                </Card>
            </Box>
            <Stack
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: 8,
                    display: 'flex',
                }} component="form">

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Vehiculo</Typography>
                        <TextField
                            fullWidth
                            {...register('vehicletype', { required: "Tipo de Vehiculo es Requerido" })}
                            margin="normal"

                            name="vehicletype"
                            autoComplete="vehicletype"
                            autoFocusrequired
                            id="outlined-required"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.vehicletype && <p>{errors.vehicletype.message}</p>}

                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Placa</Typography>
                        <TextField
                            fullWidth
                            {...register('plate', { required: "Placa es Requerida" })}

                            margin="normal"
                            name="plate"
                            autoComplete="plate"
                            autoFocusrequired
                            id="plate"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.plate && <p>{errors.plate.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Chasis</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            {...register('chasis', { required: "Chasis es Requerido" })}
                            name="chasis"
                            autoComplete="chasis"
                            autoFocusrequired
                            id="chasis"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.chasis && <p>{errors.chasis.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Marca</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            {...register('brand', { required: "Marca es Requerido" })}
                            name="brand"
                            autoComplete="brand"
                            autoFocusrequired
                            id="brand"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.brand && <p>{errors.brand.message}</p>}

                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Modelo</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            {...register('model', { required: "Modelo es Requerido" })}

                            name="model"
                            autoComplete="model"
                            autoFocusrequired
                            id="model"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.model && <p>{errors.model.message}</p>}

                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Motor</Typography>
                        <TextField
                            fullWidth
                            {...register('engine', { required: "Motor es Requerido" })}

                            margin="normal"
                            name="engine"
                            autoComplete="engine"
                            autoFocusrequired
                            id="engine"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.engine && <p>{errors.engine.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Kilometraje</Typography>
                        <TextField
                            {...register('mileage', { required: "Kilometraje es Requerido" })}

                            fullWidth
                            margin="normal"
                            name="mileage"
                            autoComplete="mileage"
                            autoFocusrequired
                            id="mileage"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.mileage && <p>{errors.mileage.message}</p>}

                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Cilindraje</Typography>
                        <TextField
                            {...register('engine_cc', { required: "Cilindraje es Requerido" })}
                            fullWidth
                            margin="normal"
                            name="engine_cc"
                            autoComplete="engine_cc"
                            autoFocusrequired
                            id="engine_cc"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.engine_cc && <p>{errors.engine_cc.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Carga</Typography>
                        <TextField
                            fullWidth
                            {...register('carrying', { required: "Capacidad de Carga es Requerido" })}
                            margin="normal"
                            name="carrying"
                            autoComplete="carrying"
                            autoFocusrequired
                            id="carrying"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.carrying && <p>{errors.carrying.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Pasajeros</Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            {...register('passengers', { required: "Capacidad de Pasajeros es Requerido" })}
                            name="passengers"
                            autoComplete="passengers"
                            autoFocusrequired
                            id="passengers"
                            label="Required"
                            defaultValue=""
                        />
                        {errors.passengers && <p>{errors.passengers.message}</p>}

                    </Grid>
                </Grid>

                <Box direction="row" alignItems="center">
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear Vehiculo</Button>
                </Box>
            </Stack>
        </Box>

    );
}