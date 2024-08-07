import * as React from 'react';
import { Grid, Typography, Paper, Box, Button, MenuList, MenuItem, Card, CardContent, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dependencies() {

    const navigate = useNavigate();
    const { data } = useDataFetcher("http://localhost:3000/v1/cities");
    const [circuits, setCircuits] = React.useState([]);
    const [subcircuits, setSubCircuits] = React.useState([]);

    const handleDependencyNavigate = (subdependencyId) => {
        navigate(`/subdependencies/${subdependencyId}`);
    };

    const getCircuits = async (cityId) => {
        try {
            const response = await axios.get(`http://localhost:3000/v1/cities/${cityId}`);
            setCircuits(response.data.circuits);
        } catch (error) {
            console.error("Error fetching circuits:", error);
        }
    };

    const fetchSubCircuits = async (circuitId) => {
        try {
            const response = await axios.get(`http://localhost:3000/v1/circuits/${circuitId}`);
            setSubCircuits(response.data.subcircuits);
        } catch (error) {
            console.error("Error fetching sub-circuits:", error);
        }
    };

    return (
        <Grid p={4} container spacing={1}>
            <Grid item xs={12} md={3}>
                <Paper>
                    <MenuList>
                        {data?.map((city) => (
                            <MenuItem onClick={() => getCircuits(city?.id)} key={city?.id} sx={{ padding: '10px' }}>
                                <Typography variant="body1" color="text.secondary">
                                    {city?.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <Paper>
                    
                    <Stack sx={{ flexWrap: "wrap"}} p={3} display="flex">
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Circuitos
                    </Typography>
                        {circuits?.map((circuit) => (
                            <Card key={circuit.id} sx={{ px:2,flex:"33%", mb: 2 }}>
                                <CardContent onClick={() => fetchSubCircuits(circuit?.id)} sx={{ border: "1px solid #ccc" }}>
                                    <Typography sx={{ fontWeight: "bold" }}>Nombre:</Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {circuit?.name}
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>Codigo:</Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {circuit?.code}
                                    </Typography>
                                    <Button component={Link} to={`/dependencies/${circuit.id}`}>Ver Circuito</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                    <Box sx={{ marginTop: "1rem", justifyContent: "end", display: "flex" }}>
                            <Button component={Link} size="large" to="/dependencies/create" variant="contained">Crear Circuito</Button>
                        </Box>
                    <Stack p={3} spacing={2} mt={4}>
                        <Typography sx={{ fontWeight: "bold" }} variant="h4">
                            Subcircuitos
                        </Typography>
                        {subcircuits?.map((subcircuit) => (
                            <Card key={subcircuit.id} onClick={() => handleDependencyNavigate(subcircuit.id)} sx={{ flex:"50%",width: "50%", mb: 2 }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: "bold" }}>
                                        Nombre Subcircuito:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {subcircuit?.name}
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>
                                        Codigo Subcircuito:
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {subcircuit?.code}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                        <Box sx={{ marginTop: "2rem", justifyContent: "end", display: "flex" }}>
                            <Button component={Link} size="large" to="/subdependencies/create" variant="contained">Crear Subcircuito</Button>
                        </Box>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}
