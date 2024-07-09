import React, { useState } from 'react';
import { Grid, Typography, Select, MenuItem, TextField, Box, Stack, Button, Chip, Autocomplete } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function CreateBonus() {
    const dangerousnessLevels = ["LOW", "MEDIUM", "HIGH"];
    const vehicleBrands = [
        "Toyota", "Volkswagen", "Ford", "Honda", "Chevrolet", "Nissan", "Hyundai", "BMW", "Mercedes-Benz",
        "Audi", "Lexus", "Kia", "Subaru", "Mazda", "Tesla", "Volvo", "Jaguar", "Land Rover", "Porsche",
        "Mitsubishi", "Fiat", "Peugeot", "Renault", "Jeep", "Dodge", "Ram", "Chrysler", "Buick", "Cadillac",
        "GMC", "Lincoln", "Acura", "Infiniti", "Mini", "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini",
        "Bentley", "Rolls-Royce", "Bugatti", "Aston Martin", "McLaren", "Suzuki", "Isuzu", "Saab", "Skoda",
        "Seat", "Citroen", "Opel", "Vauxhall", "Dacia", "Lada", "Tata", "Mahindra", "Holden", "Genesis"
    ];

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedBrands, setSelectedBrands] = useState([]);

    const onSubmit = async (data) => {
        data.brands = selectedBrands;
        console.log(data);
        const response = await axios.post("http://localhost:3000/v1/bonuses", data);
        if (response.status === 201) {
            console.log("created");
        }
    };

    return (
        <Stack
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                padding: '30px',
                alignItems: 'center',
                marginTop: 8,
                display: 'flex',
            }} component="form">
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                Crear Bono Vehicular
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Nombre</Typography>
                    <TextField
                        fullWidth
                        {...register('name', { required: "Nombre es Requerido" })}
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
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Marcas para el Bono</Typography>
                    <Autocomplete
                        multiple
                        options={vehicleBrands}
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => setSelectedBrands(value)}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip key={index} label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Marcas"
                                placeholder="Seleccione Marcas"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Meta Kilometraje Recorrido para el Bono</Typography>
                    <TextField
                        {...register('mileage', { required: "Meta Kilometraje es Requerido" })}
                        fullWidth
                        margin="normal"
                        name="mileage"
                        autoFocusrequired
                        id="mileage"
                        label="Required"
                    />
                    {errors.mileage && <p>{errors.mileage.message}</p>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Seleccionar Nivel de Peligrosidad del Bono</Typography>
                    <Select
                        {...register('dangerousness', { required: "Nivel de Peligrosidad es Requerido" })}
                        labelId="dangerousness-select-label"
                        id="dangerousness"
                        fullWidth
                        defaultValue=""
                    >
                        {dangerousnessLevels.map(level => (
                            <MenuItem key={level} value={level}>{level}</MenuItem>
                        ))}
                    </Select>
                    {errors.dangerousness && <p>{errors.dangerousness.message}</p>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Configure el Precio del Bono</Typography>
                    <TextField
                        {...register('price', { required: "Precio del Bono es Requerido" })}
                        fullWidth
                        margin="normal"
                        name="price"
                        autoFocusrequired
                        id="price"
                        label="Required"
                    />
                    {errors.discount && <p>{errors.discount.message}</p>}
                </Grid>
            </Grid>
            <Box alignItems="center" sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                <Button sx={{ minWidth: '200px' }} type="submit" variant='contained'>Crear Bono</Button>
            </Box>
        </Stack>
    );
}
