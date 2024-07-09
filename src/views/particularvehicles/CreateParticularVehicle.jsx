import { Grid, Typography, MenuItem, TextField, Box, Stack, Button, Card, CardMedia, CardContent, Select } from '@mui/material';
import DropFile from '../../components/DropFile';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import useAuthStore from '../../store/useAuthStore';
// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateParticularVehicle() {

    const userId = useAuthStore(state => state.userId)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        data.userId = userId
        try {
            const response = await axios.post("http://localhost:3000/v1/privatevehicles", data)
            if (response.status === 201) {
                console.log("succeeed")
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h1">
                        Ingresar Vehiculo Particular
                    </Typography>
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
                    marginTop: 2,
                    display: 'flex',
                }} component="form">

                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre del Vehiculo</Typography>
                        <TextField
                            fullWidth
                            {...register('name', { required: "Placa es Requerida" })}
                            margin="normal"
                            name="name"
                            autoComplete="name"
                            autoFocusrequired
                            id="name"
                            label="Required"
                        />
                        {errors.type && <p>{errors.type.message}</p>}

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Vehiculo</Typography>
                        <Select
                            {...register('type', { required: "Subcircuito Requerido" })}
                            labelId="subcircuit-select-label"
                            id="subcircuit-select"
                            fullWidth
                            defaultValue=""
                        >
                            <MenuItem value="MOTORBIKE">Motocicleta</MenuItem>
                            <MenuItem value="SEDAN">Automovil</MenuItem>
                            <MenuItem value="SUV">Camioneta</MenuItem>
                        </Select>
                        {errors.type && <p>{errors.type.message}</p>}

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
                            type="number"
                            fullWidth
                            margin="normal"
                            name="mileage"
                            autoComplete="mileage"
                            id="mileage"
                            label="Required"
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
                            type='number'
                        />
                        {errors.engine_cc && <p>{errors.engine_cc.message}</p>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Capacidad de Carga</Typography>

                        <TextField
                            fullWidth
                            {...register('carringcapacity', { required: "Capacidad de Carga es Requerido" })}
                            margin="normal"
                            name="carringcapacity"
                            type='number'
                            id="carringcapacity"
                            label="Required"
                        />
                        {errors.carringcapacity && <p>{errors.carringcapacity.message}</p>}
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
                            type='number'
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