import * as React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import useDataFetcher from '../../hooks/useDataFetcher';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.


export default function VehicleInormation() {
    
    const {data,isLoading, isError} = useDataFetcher("http://localhost:3000/v1/vehicles/4535a760-0609-4cf0-95c4-07dfa660dae5")
    console.log(data)
    return (
        <Box height="100%" mt={0.5} lineHeight={1}>
            <Typography variant="h5" fontWeight="medium">
                Vehiculos                    </Typography>
            <Box>
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                {data?.model}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button component={Link} to="/vehicles/1" variant="contained" size="large">Detalles Vehiculo</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}