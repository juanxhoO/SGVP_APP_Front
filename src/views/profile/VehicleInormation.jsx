import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useDataFetcher from '../../hooks/useDataFetcher';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import useAuthStore from "../../store/useAuthStore";

export default function VehicleInormation() {
    const userId = useAuthStore(state => state.userId)
    const { data: userInfo, isLoading, isError } = useDataFetcher("http://localhost:3000/v1/users/" + userId)
    const vehicles = userInfo?.vehicle
    return (
        <Box height="100%" mt={0.5} lineHeight={1}>
            <Typography xs={{ textAlign: "center" }} variant="h5" fontWeight="medium">
                Vehiculos
            </Typography>
            <Box>
                {vehicles?.map((vehicle, index) => (
                    <Card display="flex" xs={{ textAlign: "center" }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography>
                                Nombre:
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {vehicle?.name}
                            </Typography>
                            <Typography>
                                Modelo:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {vehicle?.model}
                            </Typography>
                            <Typography>
                                Kilometraje:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {vehicle?.mileage + " KM"}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button component={Link} to={`/vehicles/${vehicle.id}`} variant="contained" size="large">
                                Detalles Vehiculo
                            </Button>                        
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}