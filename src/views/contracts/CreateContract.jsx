import { Grid, Typography, TextField, Box, Stack, Button, Card, CardMedia, CardContent } from '@mui/material';
import DropFile from '../../components/DropFile';
import { useForm } from 'react-hook-form'

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreateContract() {
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

                <Typography>
                    Crear Contrato
                </Typography>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre</Typography>
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
                        <Typography sx={{ fontWeight: 'bold' }}>Detalles</Typography>
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
                        <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Mecanica</Typography>
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
                        <Typography sx={{ fontWeight: 'bold' }}>Tipo de Contrato</Typography>
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

    );
}