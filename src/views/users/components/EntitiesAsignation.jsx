import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Grid, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function EntitiesAsignation({ subCircuits, vehicles }) {

    const [vehicleId, setVehicleId] = useState('')
    const { id } = useParams()
    const {
        register: registerSubcircuit,
        handleSubmit: handleSubmitSubcircuit,
        formState: { errors: errorsSubcircuit },
    } = useForm({
        defaultValues: {
            subcircuitId: ''
        }
    });

    const onSubmitSubcircuit = async (formData) => {
        const modifiedData = {
            subcircuitId: formData.subcircuitId
        };
        await axios.patch(`http://localhost:3000/v1/users/${id}`, modifiedData);
    };

    const onSubmitVehicle = async (e) => {
        e.preventDefault()
        const data = {
            userId: id
        };
        const response = await axios.patch(`http://localhost:3000/v1/vehicles/${vehicleId}`, data);
    };

    return (
        <Stack spacing={4}>
            <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 'bold' }}>Asignar Subcircuito</Typography>
                <form onSubmit={handleSubmitSubcircuit(onSubmitSubcircuit)}>
                    <Select
                        {...registerSubcircuit('subcircuitId', { required: "Subcircuito Requerido" })}
                        labelId="subcircuit-select-label"
                        id="subcircuit-select"
                        fullWidth
                        defaultValue=""
                    >
                        {subCircuits?.map((subCircuit) => (
                            <MenuItem key={subCircuit?.id} value={subCircuit?.id}>{subCircuit?.name}</MenuItem>
                        ))}
                    </Select>
                    {errorsSubcircuit.subcircuitId && <p>{errorsSubcircuit.subcircuitId.message}</p>}
                    <Button sx={{ minWidth: '200px', marginTop: 2 }} type="submit" variant='contained'>Asignar Subcircuito</Button>
                </form>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 'bold' }}>Asignar Vehiculo</Typography>
                <form onSubmit={onSubmitVehicle}>
                    <Select
                        onChange={(e) => setVehicleId(e.target.value)}
                        labelId="vehicle-select-label"
                        id="vehicle-select"
                        fullWidth
                        defaultValue=""
                    >
                        {vehicles?.map((vehicle) => (
                            <MenuItem key={vehicle?.id} value={vehicle?.id}>{vehicle?.name}</MenuItem>
                        ))}
                    </Select>
                    <Button sx={{ minWidth: '200px', marginTop: 2 }} type="submit" variant='contained'>Asignar Vehiculo</Button>
                </form>
            </Grid>
        </Stack>
    );
}
