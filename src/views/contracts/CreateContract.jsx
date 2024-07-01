import { Grid, Typography, Select, MenuItem, TextField, Box, Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import axios from 'axios';

export default function CreateContract() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const response = await axios.post("http://localhost:3000/v1/contracts", data)
        if(response.status === 201){
            console.log("created")
        }
    }
    return (
        <Stack
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">

            <Typography variant="h1" sx={{fontWeight:"bold"}}>
                Crear Contrato
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Nombre</Typography>
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
                    {errors.name && <p>{errors.name.message}</p>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Detalles</Typography>
                    <TextField
                        {...register('details', { required: "Cilindraje es Requerido" })}
                        fullWidth
                        margin="normal"
                        name="details"
                        autoFocusrequired
                        id="details"
                        label="Required"
                    />
                    {errors.details && <p>{errors.details.message}</p>}

                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Mecanica</Typography>
                    <TextField
                        fullWidth
                        {...register('mecanicId', { required: "Capacidad de Carga es Requerido" })}
                        margin="normal"
                        name="mecanicId"
                        autoComplete="mecanicId"
                        autoFocusrequired
                        id="mecanicId"
                        label="Required"
                    />
                    {errors.mecanicId && <p>{errors.mecanicId.message}</p>}

                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Tipo de Contrato</Typography>
                  <Select
                            {...register('type', { required: "Tipo de Contrato  Requerido" })}
                            labelId="subcircuit-select-label"
                            id="type"
                            fullWidth
                            defaultValue=""
                        >
                            <MenuItem value="OCASIONAL">Ocasional</MenuItem>
                            <MenuItem value="FIJO">Fijo</MenuItem>
                        </Select>
                </Grid>
            </Grid>
            <Box  alignItems="center" sx={{display:"flex",justifyContent:"end",mt:4}}>
                <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear Contrato</Button>
            </Box>
        </Stack>
    );
}