import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Box, Typography, Button } from '@mui/material';
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

    // Vehicle form
    const {
        register: registerVehicle,
        handleSubmit: handleSubmitVehicle,
        formState: { errors: errorsVehicle },
    } = useForm({
        defaultValues: {
            vehicleId: ''
        }
    });

    const onSubmitSubcircuit = async (formData) => {
        const modifiedData = {
            subcircuitId: formData.subcircuitId
        };
        const response = await axios.patch(`http://localhost:3000/v1/users/${id}`, modifiedData);

        if (response === 200) {
            alert("Subcircuito Asignado Satisfactoriamente")
        }
    };

    const onSubmitVehicle = async (e) => {
        const data = {
            userId: id
        };
        const response = await axios.patch(`http://localhost:3000/v1/vehicles/${vehicleId}`, data);
        if (response.status === 200) {
            alert("Vehiculo Asignado Satisfactoriamente")
        }
    };

    return (
        <Stack container sx={{
            padding: '30px',
            alignItems: 'center',
            marginTop: 2,
            display: 'flex',
        }} spacing={4}>
            <Typography sx={{ fontWeight: 'bold' }}>Asignar Subcircuito</Typography>
            <Box component="form" onSubmit={handleSubmitSubcircuit(onSubmitSubcircuit)}>
                <Select
                    {...registerSubcircuit('subcircuitId')}
                    labelId="subcircuit-select-label"
                    id="subcircuit-select"
                    fullWidth
                    defaultValue=""
                >
                    {subCircuits?.map((subCircuit) => (
                        <MenuItem key={subCircuit?.id} value={subCircuit?.id}>{subCircuit?.name}</MenuItem>
                    ))}
                </Select>
                <Button sx={{ minWidth: '200px', marginTop: 2 }} type="submit" variant='contained'>Asignar Subcircuito</Button>
            </Box>

            <Typography sx={{ fontWeight: 'bold' }}>Asignar Vehiculo</Typography>
            <Box component="form" onSubmit={handleSubmitVehicle(onSubmitVehicle)}>
                <Select
                    {...registerVehicle('vehicleId')}
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
            </Box>
        </Stack>
    );
}
