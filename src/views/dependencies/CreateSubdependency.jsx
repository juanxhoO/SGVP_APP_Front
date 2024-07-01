import * as React from 'react';
import { MenuItem, Select, TextField, Grid, Typography, Card, CardMedia, CardContent, Paper, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import useDataFetcher from '../../hooks/useDataFetcher';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function CreateSubdependency() {

    const navigate = useNavigate()
    const { data: circuitInfo } = useDataFetcher("http://localhost:3000/v1/circuits/");
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
        reset,
        setValue
    } = useForm();

    const selectedCircuitId = watch('circuitId');
    const selectedCircuit = circuitInfo?.find(circuit => circuit.id === selectedCircuitId);

    React.useEffect(() => {
        if (selectedCircuit) {
            setValue('code', `${selectedCircuit.code}-`);
        } else {
            setValue('code', '');
        }
    }, [selectedCircuit, setValue]);

    const onSubmit = async (data) => {
        const postData = {
            ...data,
            image: "dssdsd" // Include the uploaded image ID
        };

        try {
            const response = await axios.post("http://localhost:3000/v1/subcircuits", postData);
            console.log(response);
            if (response.status === 201) {
                navigate("/dependencies")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Grid p={4} container spacing={2}>
            <Grid
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                xs={12}>
                <Paper sx={{display:"flex", flexDirection:"column",gap:"2rem", p: 4 }}>
                    <Typography variant="h1">Crear SubCircuito</Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                            id="image"
                            name="image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Circuito</Typography>
                        <Select
                            fullWidth
                            defaultValue=""
                            {...register('circuitId', { required: "Circuito es Requerido" })}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Circuito"
                        >
                            {circuitInfo?.map((circuit, index) => (
                                <MenuItem key={index} value={circuit?.id}>{circuit?.name}</MenuItem>
                            ))}
                        </Select>
                        {errors.circuitId && <p>{errors.circuitId.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Nombre del Sub Circuito</Typography>
                        <TextField
                            {...register('name', { required: "Nombre es Requerido" })}
                            fullWidth
                            margin="normal"
                            autoComplete="name"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 'bold' }}>Codigo de Sub Circuito</Typography>
                        <TextField
                            {...register('code', { required: "Codigo Requerido" })}
                            fullWidth
                            margin="normal"
                            autoComplete="code"
                        />
                        {errors.code && <p>{errors.code.message}</p>}
                    </Grid>
                    <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear Sub Circuito</Button>
                </Paper>
            </Grid>
        </Grid>
    );
}
