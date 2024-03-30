import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.


export default function DependencyInormation() {
    return (

                <Box height="100%" mt={0.5} lineHeight={1}>
                    <Typography variant="h5" fontWeight="medium">
                        Dependencias                 </Typography>
                    <Box>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Vilcabamba
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button component={Link} to="/dependencies/1" variant="contained" size="large">Ver Dependecia</Button>
                        </CardActions>
                    </Box>
                </Box>
        
    );
}