import * as React from 'react';
import { Grid, Typography, Paper, MenuList, MenuItem, Card, CardContent, Stack } from '@mui/material';
// TODO remove, this demo shouldn't need to reset the theme.
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useDataFetcher from '../../hooks/useDataFetcher';
import axios from 'axios';
import { useEffect } from 'react';
export default function Dependencies() {

    const Parroquias = ["VILCABAMBA(VICTORIA)", "QUINARA", "MALACATOS(VALLADOLID)", "CHUQUIRIBAMBA", "TAQUIL(MIGUELRIOFRIO", "Loja", "EL TAMBO", "CATAMAYO (LATOMA)", "ZAMBI", "SANPEDRODE LABENDITA", "CHAGUARPAMBA"];
    const navigate = useNavigate();
    const { data } = useDataFetcher("http://localhost:3000/v1/cities");

    const [circuit, setCircuit] = React.useState()
    const [subcircuits, setSubCircuits] = React.useState([])
    const handleDependencyNavigate = () => {
        console.log('');
        navigate('/dependencies/1');
    }

    const getCircuit = async (cityId) => {
        const response = await axios.get("http://localhost:3000/v1/cities/" + cityId)
        console.log(response.data.circuits[0])
        setCircuit(response.data.circuits[0])
    }


    useEffect(() => {
        const fetchSubCircuits = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/v1/circuits/${circuit?.id}`);
                setSubCircuits(response.data.subcircuits);
                console.log(response.data.subcircuits)
            } catch (error) {
                console.error("Error fetching sub-circuits:", error);
            }
        };

        fetchSubCircuits();
    }, [circuit])

    return (
        <Box>
            <Typography variant='h3'>
                Dependencias
            </Typography>
            <Grid p={4} container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <MenuList>
                            {data?.map((city) => (
                                <MenuItem onClick={() => getCircuit(city?.id)} key={city?.id} sx={{ padding: '10px' }}>
                                    <Typography variant="p" color="text.secondary">
                                        {city?.name}
                                    </Typography>
                                </MenuItem>

                            ))}
                        </MenuList>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {circuit?.name}                            </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {circuit?.code}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Typography>
                            Subcircuitos
                        </Typography>


                        {
                            subcircuits?.map((subcircuit) => (
                                <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
                                    <Card onClick={handleDependencyNavigate} sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {subcircuit?.name}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {subcircuit?.code}
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            ))}
                    </Paper>
                    {/* <Box sx={{ marginTop: "2rem", justifyContent: "end", display: "flex" }}>
                        <Button component={Link} size="large" to="/dependencies/create" variant="contained">Crear Circuito</Button>
                    </Box> */}
                </Grid>
            </Grid>
        </Box>
    );
}